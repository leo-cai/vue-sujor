import Vue from 'vue'
import Router from 'vue-router'
import {
  AppHeader,
  AppFooter,
  Index,
  SignIn,
  SignUp,
  AdminIndex,
  Test
} from './params'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        'app-header': AppHeader,
        'app-body': Index,
        'app-footer': AppFooter
      }
    },
    {
      path: '/test',
      components: {
        'app-body': Test
      }
    },
    {
      path: '/admin',
      components: {
        'app-body': AdminIndex
      }
    },
    {
      path: '/admin/signin',
      components: {
        'app-body': SignIn
      }
    },
    {
      path: '/admin/signup',
      components: {
        'app-body': SignUp
      }
    }
  ]
})
