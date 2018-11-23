<template>
  <div>
    <Header>
      <span slot="logo" class="head_logo" @click="reload">ele.me</span>
    </Header>
    <nav class="city_nav">
      <div class="city_tip">
        <span>当前定位城市:</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>
      <div style="width:100%; height: 120px; background: #fff; color: #000;">北京</div>
      <!-- <router-link :to="'/city/' + guessCityid" class="guess_city">
         <span> {{ guessCity }} </span>
            <svg class="arrow_right">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
            </svg>
      </router-link> -->
    </nav>
    <section id="hot_city_container">
      <h4 class="city_title">热门城市</h4>
      <ul class="citylistul clear">
        <router-link tag="li" v-for="item in hotcity" :to="'/city/' + item.id" :key="item.id">
           {{ item.name }}
        </router-link>
      </ul>
    </section>
  </div>
</template>
<style scoped lang="scss">
@import '../../style/mixin.scss';
.head_logo {
  // left: 0.4rem;
  // font-weight: 400;
  // @include sc(0.7rem, #fff);
  // @include wh(2.3rem, 0.7rem);
  // @include ct;
  position: absolute;
  font-size: 36px;
  margin-bottom: 16px;
  top: 50%;
  left: 2%;
  transform: translateY(-50%);
}
.city_nav {
  background-color: #fff;
  color: #000000;
  font-size: 36px;
  width: 100%;
  height: 120px;
  position: absolute;
  top: 120px;
  .city_tip {
    display: flex;
    justify-content: space-between;
    height: 120px;
    line-height: 120px;
    padding: 0 10px;
    border-bottom: 1px solid #ccc;
    span:nth-of-type(2) {
      position: absolute;
      right: 30px;
    }
  }
  .guess_city {
    display: flex;
    justify-content: space-between;
  }
}
#hot_city_container {
  margin-bottom: 12px;
  background: #fff;
  .city_title{
    color: #666;
  }
}
</style>
<script>
import Header from '@/components/header/header'
import City from '@/page/city/city'
export default {
  name: 'home',
  components: {
    Header,
    City
  },
  data () {
    return {
      guessCityid: '',
      guessCity: '',
      hotcity: ''
    }
  },
  methods: {
    reload () {

    }
  }
}
</script>
