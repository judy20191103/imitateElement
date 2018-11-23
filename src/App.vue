<template>
  <div>
    <transition name="router-fade" mode="out-in">
      <Home/>
    </transition>
  </div>
</template>

<script>
import Header from './components/header/header'
import Home from './page/home/home'
export default {
  name: 'App',
  components: {
    Header,
    Home
  }
}
</script>

<style scope lang="scss">
@import './style/common.scss';
.router-fade-enter-active, .router-fade-leave-active {
  transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
  opacity: 0;
}
</style>
