import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import Icon from 'vue-awesome/components/Icon.vue'
import vueScrollBehavior from 'vue-scroll-behavior'
import VueAnalytics from 'vue-analytics'
import BootstrapVue from 'bootstrap-vue'
import Meta from 'vue-meta';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-awesome/icons'

Vue.use(Meta);
Vue.config.productionTip = false

Vue.use(VueAnalytics, { id: 'UA-54514383-4', router })
Vue.use(vueScrollBehavior, { router: router });
Vue.use(VueResource);
Vue.use(BootstrapVue);

Vue.component('icon', Icon);

Vue.http.interceptors.push(function(request, next) {
    let self = this;
    next((response) => {
        if (response.status === 401) {
            self.$dispatch('logout');
        }
    });
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
