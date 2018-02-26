import Vue from 'vue'
import Router from 'vue-router'
import {
  AppHeader,
  AppFooter,
  Logo,
  Index,
  SignIn,
  SignUp,
  AdminIndex
} from './params'

Vue.use(Router)

export default new Router({
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
      path: '/admin',
      components: {
        'app-body': AdminIndex
      }
    },
    {
      path: '/admin/signin',
      components: {
        'app-logo': Logo,
        'app-body': SignIn
      }
    },
    {
      path: '/admin/signup',
      components: {
        'app-logo': Logo,
        'app-body': SignUp
      }
    }
  ]
})
