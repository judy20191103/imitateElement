<template>
  <div>
    <header id="head_top">
      <slot name="logo"></slot>
      <slot name="changecity"></slot>
      <!-- <slot name="logo"></slot>
      <slot name="search"></slot>
      <section class="head_goback" v-if="goback" @click="$router.go(-1)">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <ployline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
        </svg>
      </section> -->
      <!-- <router-link :to="userInfo? '/profile': '/login'">
      </router-link> -->
    </header>
  </div>
</template>
<style scoped>
#head_top {
  width:  100%;
  height: 120px;
  background: burlywood;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
}
</style>
<script>
export default {
  name: 'Header',
  data () {
    return {

    }
  }
}
</script>
