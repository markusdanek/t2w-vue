import Vue from 'vue'
import Router from 'vue-router'

import App_Header from '@/components/app/Header'
import App_Footer from '@/components/app/Footer'
import Home from '@/components/home/Layout'
import Home_Hero from '@/components/home/Hero'
import Home_JobList from '@/components/home/JobList'
import Home_Service from '@/components/home/Service'
import Home_Testimonial from '@/components/home/Testimonial'
import About from '@/components/about/Layout'
import About_Hero from '@/components/about/Hero'
import About_Employee from '@/components/about/Employee'
import About_Text from '@/components/about/Text'

Vue.component('app-header', App_Header);
Vue.component('app-footer', App_Footer);
Vue.component('home-hero', Home_Hero);
Vue.component('home-joblist', Home_JobList);
Vue.component('home-service', Home_Service);
Vue.component('home-testimonial', Home_Testimonial);
Vue.component('about-hero', About_Hero);
Vue.component('about-employee', About_Employee);
Vue.component('about-text', About_Text);



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ueber',
      name: About,
      component: About
    }
  ]
})

// Router.beforeEach(function () {
//   window.scrollTo(0, 0)
// })
