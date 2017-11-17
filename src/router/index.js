import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass:"is-active",
  routes: [
    // 首页采用普通加载方式,其他的根据需求加载才使用懒加载方式
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      component: resolve => {
        require(['../pages/Category'], resolve)
      }
    },
    {
      path: '/recommand',
      component: resolve => {
        require(['../pages/Recommand'], resolve)
      }
    },
    {
      path: '/roomList/:gameId/:gameName',
      component: resolve => {
        require(['../pages/RoomList'], resolve)
      }
    },
    // {
    //   path: "*",
    //   redirect: '/'
    // }
  ]
})
