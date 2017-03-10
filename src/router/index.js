import Vue from 'vue'
import Router from 'vue-router'

import App_Header from '@/components/app/Header'
import App_Footer from '@/components/app/Footer'

import Home from '@/components/home/Layout'
import Home_Hero from '@/components/home/Hero'
import Home_JobList from '@/components/home/JobList'
import Home_Service from '@/components/home/Service'
import Home_Testimonial from '@/components/home/Testimonial'

import Company from '@/components/company/Layout'
import Company_Hero from '@/components/company/Hero'
import Company_Tabs from '@/components/company/tabs/Layout'
import Company_Tabs_Layout from '@/components/company/tabs/Layout'
import Company_Tabs_General from '@/components/company/tabs/General'
import Company_Tabs_Consulting from '@/components/company/tabs/Consulting'
import Company_Tabs_Leasing from '@/components/company/tabs/Leasing'
import Company_Tabs_Test from '@/components/company/tabs/Test'
import Company_Tabs_Payroll from '@/components/company/tabs/Payroll'

import About from '@/components/about/Layout'
import About_Hero from '@/components/about/Hero'
import About_Employee from '@/components/about/Employee'
import About_Text from '@/components/about/Text'

import Contact from '@/components/contact/Layout'
import Contact_Hero from '@/components/contact/Hero'
import Contact_Info from '@/components/contact/Info'

Vue.component('app-header', App_Header);
Vue.component('app-footer', App_Footer);
Vue.component('home-hero', Home_Hero);
Vue.component('home-joblist', Home_JobList);
Vue.component('home-service', Home_Service);
Vue.component('home-testimonial', Home_Testimonial);
Vue.component('company-hero', Company_Hero);
Vue.component('about-hero', About_Hero);
Vue.component('about-employee', About_Employee);
Vue.component('about-text', About_Text);
Vue.component('contact-hero', Contact_Hero);
Vue.component('contact-info', Contact_Info);
Vue.component('company-hero', Company_Hero);
Vue.component('company-tabs', Company_Tabs);
Vue.component('company-tabs-general', Company_Tabs_General);
Vue.component('company-tabs-consulting', Company_Tabs_Consulting);
Vue.component('company-tabs-leasing', Company_Tabs_Leasing);
Vue.component('company-tabs-test', Company_Tabs_Test);
Vue.component('company-tabs-payroll', Company_Tabs_Payroll);

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
      name: 'Unternehmen',
      component: Company
    },
    {
      path: '/ueber',
      name: 'Über uns',
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
