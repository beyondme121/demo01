// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'lib-flexible'
import './assets/css/font-awesome.css' //css文件的import要写全.css
import './assets/css/style.css'

import axios from 'axios'

Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.filter('number', value => {
  if(value > 10000) {
    return (value/10000).toFixed(2) + '万'
  } else {
    return value
  }
})

Vue.filter('message', value => {
  if(value.length > 12) {
    return value.substr(0,10) + '...'
  } else {
    return value
  }
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
