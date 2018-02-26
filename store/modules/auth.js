import api from '../apis/auth'
import {deleteCookie, setCookie, checkSignInCookie} from '../../utils/cookie'
import { SET_SIGNIN_STATE, SET_SIGNIN_USER, SET_PERMISSIONS } from '../mutation-type'

// state
const state = {
  signInState: false,
  signInUser: {},
  permissions: []
}

// getters
const getters = {
  signInState: state => state.signInState,
  signInUser: state => state.signInUser,
  permissions: state => state.permissions
}

// actions
const actions = {
  // 登录
  async signIn ({commit, state}, params) {
    let that = params.this
    let promise = api.signIn(params.user)
    await promise.then((response) => {
      console.log(response.data)
      const data = response.data
      if (data.code === 1) {
        // set cookie token
        setCookie('jwt_token', data.token, data.expires)
        // set user's localStorage
        localStorage.setItem('signInUser', JSON.stringify(data.bean))
        // commit到user
        commit('SET_SIGNIN_USER', data.bean)
        that.$message({
          message: data.msg,
          type: 'success'
        })
        // 登录成功 -> 后台管理页
        that.$router.push({path: '/admin'})
      } else {
        that.$message({
          message: data.msg,
          type: 'warning'
        })
      }
    }).catch((error) => {
      console.log(error)
      that.$message({
        message: '网络错误！请稍后再试！',
        type: 'error'
      })
    })
  },
  // 注册
  async signUp ({commit, state}, params) {
    let that = params.this
    let promise = api.signUp(params.user)
    await promise.then((response) => {
      console.log(response.data)
      const data = response.data
      if (data.code === 1) {
        that.$message({
          message: data.msg,
          type: 'success'
        })
        // 注册成功 -> 登录页
        that.$router.push({path: '/admin/signin'})
      } else {
        that.$message({
          message: data.msg,
          type: 'warning'
        })
      }
    }).catch((error) => {
      console.log(error)
      that.$message({
        message: '网络错误！请稍后再试！',
        type: 'error'
      })
    })
  },
  // 注销
  async signOut ({commit, state}, params) {
    let that = params.this
    let promise = api.signOut(params.user)
    await promise.then((response) => {
      console.log(response.data)
      const data = response.data
      if (data.code === 1) {
        // delete cookie token
        deleteCookie('jwt_token')
        // remove all localStorage maybe todo
        localStorage.clear()
        commit('SET_SIGNIN_USER', {})
        that.$message({
          message: data.msg,
          type: 'success'
        })
        // 注销成功 -> 登录页
        that.$router.push({path: '/admin/signin'})
      } else {
        that.$message({
          message: data.msg,
          type: 'warning'
        })
      }
    }).catch((error) => {
      console.log(error)
      that.$message({
        message: '网络错误！请稍后再试！',
        type: 'error'
      })
    })
  },
  // 检查登录状态拦截 -> 登录页
  checkSignIn ({commit, state}, params) {
    let that = params.this
    if (!checkSignInCookie()) {
      commit('SET_SIGNIN_STATE', false)
      that.$message({
        message: '状态已失效！请重新登录！',
        type: 'warning'
      })
      that.$router.push({path: '/admin/signin'})
    } else {
      commit('SET_SIGNIN_STATE', true)
    }
  },
  // 检查登录状态拦截 -> 返回系统管理页
  checkToken ({commit, state}, params) {
    let that = params.this
    if (checkSignInCookie()) {
      commit('SET_SIGNIN_STATE', true)
      that.$message({
        message: '您已登录！',
        type: 'warning'
      })
      that.$router.push({path: '/admin'})
    } else {
      commit('SET_SIGNIN_STATE', false)
    }
  },
  // 获取用户拥有的权限
  async getPermissions ({commit, state}, params) {
    let that = params.this
    let promise = api.getPermissions(params.user.username)
    await promise.then((response) => {
      console.log(response.data)
      const data = response.data
      console.log(data.bean)
      if (data.code === 1) {
        // set permission to localStorage
        localStorage.setItem('permissions', data.bean)
        // commit to permission
        commit('SET_PERMISSIONS', data.bean)
      } else {
        that.$message({
          message: data.msg,
          type: 'warning'
        })
      }
    }).catch((error) => {
      console.log(error)
      that.$message({
        message: '网络错误！请稍后再试！',
        type: 'error'
      })
    })
  }
}

// mutations
const mutations = {
  [SET_SIGNIN_STATE] (state, signInState) {
    state.signInState = signInState
  },
  [SET_SIGNIN_USER] (state, signInUser) {
    state.signInUser = signInUser || {}
  },
  [SET_PERMISSIONS] (state, permissions) {
    state.permissions = permissions || []
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
