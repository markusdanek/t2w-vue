import Vue from 'vue'
import Bootsrap from 'bootstrap-loader'
import App from './App'
import router from './router'

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
