import 'vue-awesome/icons'
import Vue from 'vue'
import App from './App'
import router from './router/index'
import VueResource from 'vue-resource'
import Icon from 'vue-awesome/components/Icon.vue'
Vue.component('icon', Icon)

Vue.use(VueResource);

Vue.config.productionTip = true

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
