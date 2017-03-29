import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/Layout'
import Company from '@/components/company/Layout'
import Applicants from '@/components/applicants/Layout'
import About from '@/components/about/Layout'
import Jobs from '@/components/jobs/Layout'
import JobSingle from '@/components/jobsingle/Layout'
import Contact from '@/components/contact/Layout'
import Impress from '@/components/impress/Layout'

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
      path: '/bewerber',
      name: 'Applicants',
      component: Applicants
    },
    {
      path: '/ueber',
      name: 'About',
      component: About
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: Jobs
    },
    {
      path:'/jobs/:id',
      name: 'JobSingle',
      component: JobSingle
    },
    {
      path: '/kontakt',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/impressum',
      name: 'Impress',
      component: Impress
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
