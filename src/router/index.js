import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/Layout'
import Company from '@/components/company/Layout'
import About from '@/components/about/Layout'
import Contact from '@/components/contact/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/unternehmen',
      name: 'Company',
      component: Company
    },
    {
      path: '/ueber',
      name: 'About',
      component: About
    },
    {
      path: '/kontakt',
      name: 'Contact',
      component: Contact
    }
  ]
})

// Router.beforeEach(function () {
//   window.scrollTo(0, 0)
// })
