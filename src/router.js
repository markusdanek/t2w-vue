import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/unternehmen',
      name: 'unternehmen',
      component: () => import (/* webpackChunkName: "unternehmen" */
      './views/Unternehmen.vue')
    }, {
      path: '/bewerber',
      name: 'bewerber',
      component: () => import (/* webpackChunkName: "bewerber" */
      './views/Bewerber.vue')
    }, {
      path: '/ueber',
      name: 'ueber',
      component: () => import (/* webpackChunkName: "ueber" */
      './views/Ueber.vue')
    }, {
      path: '/kontakt',
      name: 'kontakt',
      component: () => import (/* webpackChunkName: "kontakt" */
      './views/Kontakt.vue')
    }, {
      path: '/impressum',
      name: 'impressum',
      component: () => import (/* webpackChunkName: "impressum" */
      './views/Impressum.vue')
    }, {
      path: '/jobs',
      name: 'jobs',
      component: () => import (/* webpackChunkName: "jobs" */
      './views/Jobs.vue')
    }, {
      path: '/jobs/:id',
      name: 'JobSingle',
      component: () => import (/* webpackChunkName: "JobSingle" */
      './components/JobSingle.vue')
    },

    // BACKEND ROUTES
    {
      path: '/backend/login',
      name: 'Login',
      component: () => import (/* webpackChunkName: "login" */
      './views/backend/Login.vue')
    }, {
      path: '/backend/list',
      name: 'jobList',
      component: () => import (/* webpackChunkName: "jobList" */
      './views/backend/JobList.vue')
    }, {
      path: '/backend/edit/:id',
      name: 'jobEdit',
      component: () => import (/* webpackChunkName: "jobEdit" */
      './views/backend/JobEdit.vue')
    }, {
      path: '/backend/add',
      name: 'jobAdd',
      component: () => import (/* webpackChunkName: "jobAdd" */
      './views/backend/JobAdd.vue')
    }, {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior: function(to, from, savedPosition) {
    return savedPosition || {
      x: 0,
      y: 0
    }
  }
})
