import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap-loader'

Vue.config.productionTip = true

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
