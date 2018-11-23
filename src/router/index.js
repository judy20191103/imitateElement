import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
Vue.use(Router)

const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
export default new Router({
  routes: [
    {
      path: '/', // 以/开头的表示根路由，利用children属性配置嵌套路由
      component: App, // 顶层路由，对应index.html
      children: [
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          component: home
        },
        {
          path: '/login',
          component: login
        },
        {
          path: '/city/:cityid',
          component: city
        }
      ]
    }
  ]
})
