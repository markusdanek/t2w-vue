import Vue from 'vue'
import 'bootstrap-loader'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.config.productionTip = true

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
