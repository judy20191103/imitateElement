<template>
  <div class="city_container">
    <Header goback='true'>
      <router-link to="/home" slot="changecity" class="change_city">切换城市</router-link>
    </Header>
    <form class="city_form" v-on:submit.prevent>
      <input type="search" name="city" placeholder="输入学校,商店,地址" class="city_search" required v-model="inputValue"/>
      <input type="submit" name="submit" class="city_submit" value="提交" @click="postPosition">
    </form>
    <Header v-if="historytitle" class="posi_search_history">搜索历史</Header>
    <ul class="getposi_ul">
      <li v-for="(item, index) in placelist" @click="nextpage(index, item.geohash)" :key="index">
       <h4 class="posi_name ellipsis"> {{  item.name }} </h4>
       <p class="posi_address ellipsis"> {{ item.address }} </p>
      </li>
    </ul>
    <footer v-if="historytitle&&placelist.length" class="clear_all_history" @click="clearAll">清空所有</footer>
    <div class="search_none_place" v-if="placeNone">很抱歉，无搜索结果</div>
  </div>
</template>
<style scoped lang="scss">
@import '../../style/mixin';
.city_container {
  padding-top: 16px;
  position: absolute;
}
</style>

<script>
import Header from '@/components/header/header'
import { currentcity, searchplace } from '@/service/getData'
import { getStore, setStore, removeStore } from '@/config/mUtils'
export default {
  components: {
    Header
  },
  data () {
    return {
      inputValue: '', // 当前搜索地址
      cityid: '', // 当前城市id
      cityname: '', // 当前城市名字
      placelist: [], // 搜索城市列表
      placeHistory: [], // 历史搜索记录
      historytitle: true, // 默认历史搜搜头部，点击后隐藏
      placeNone: false // 搜搜无结果，显示提示信息
    }
  },
  mounted () {
    this.cityid = this.$route.params.cityid
    currentcity(this.cityid).then(res => {
      this.cityname = res.name
    })
    this.initData()
  },
  methods: {
    initData () {
      // 获取搜索历史纪录
      if (getStore('placeHistory')) {
        this.placelist = JSON.parse(getStore('placeHistory'))
      } else {
        this.placelist = []
      }
    },
    // 发送搜索信息
    postPosition () {
      if (this.inputValue) {
        searchplace(this.cityid, this.inputValue).then(res => {
          this.historytitle = false
          this.placelist = res
          if (res.length > 0) {
            this.placeNone = false
          } else {
            this.placeNone = true
          }
        })
      }
    },
    nextpage (index, geohsah) {

    },
    clearAll () {
      removeStore('placeHistory')
      this.initData()
    }
  }
}
</script>
