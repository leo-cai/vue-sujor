import Vue from 'vue'
import * as config from '../config'

export default {
  signIn (user) {
    let apiUrl = `${config.API_ROOT}v1/user/signin`
    return Vue.http.post(apiUrl, user)
  },
  signUp (user) {
    let apiUrl = `${config.API_ROOT}v1/user/signup`
    return Vue.http.post(apiUrl, user)
  },
  signOut (user) {
    let apiUrl = `${config.API_ROOT}v1/user/signout`
    return Vue.http.post(apiUrl, user)
  },
  getPermissions (username) {
    let apiUrl = `${config.API_ROOT}v1/user/permissions/by/name/${username}`
    return Vue.http.get(apiUrl)
  }
}
