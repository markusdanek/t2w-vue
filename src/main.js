import 'vue-awesome/icons'
import Vue from 'vue'
import App from './App'
import router from './router/index'
import VueResource from 'vue-resource'
import Icon from 'vue-awesome/components/Icon.vue'
import store from './store/store'
import vueScrollBehavior from 'vue-scroll-behavior'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, { id: 'UA-54514383-4', router })

Vue.use(vueScrollBehavior, { router: router });

Vue.component('icon', Icon);

Vue.use(VueResource);

Vue.config.productionTip = true

Vue.http.interceptors.push(function(request, next) {
    let self = this;
    next((response) => {
        if (response.status === 401) {
            self.$dispatch('logout');
        }
    });
});

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
