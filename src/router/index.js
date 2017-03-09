import Vue from 'vue'
import Router from 'vue-router'

import App_Header from '@/components/app/Header'
import App_Footer from '@/components/app/Footer'
Vue.component('app-header', App_Header);
Vue.component('app-footer', App_Footer);

import Home from '@/components/home/Layout'
import Home_Hero from '@/components/home/Hero'
import Home_JobList from '@/components/home/JobList'
import Home_Service from '@/components/home/Service'
import Home_Testimonial from '@/components/home/Testimonial'
Vue.component('home-hero', Home_Hero);
Vue.component('home-joblist', Home_JobList);
Vue.component('home-service', Home_Service);
Vue.component('home-testimonial', Home_Testimonial);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

// Router.beforeEach(function () {
//   window.scrollTo(0, 0)
// })
