<template>
  <div>
    <h3>home vue</h3>
    <h3>{{ this.login }}</h3>
    <button @click="handleClick">点击</button>
  </div>
</template>
<style scoped>

</style>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'login'
    ])
  },
  methods: {
    ...mapMutations([
      'LOGIN'
    ]),
    handleClick () {
      this.LOGIN('login')
      console.error('登陆了')
    }
  }
}
</script>
