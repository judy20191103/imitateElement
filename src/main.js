// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import './config/rem'
import Fastclick from 'fastclick'

Vue.config.productionTip = false

if ('addEventListener' in document) {
  document.addEventListener('DOMConetentLoaded', function () {
    Fastclick.attach(document.body)
  }, false)
}
// addEventListener 参数选填，用来控制监听器是在捕获阶段还是冒泡阶段执行
// false = 冒泡(默认值) true = 捕获阶段(用的少)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
