import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'

import project from './modules/project'
import auth from './modules/auth'
import index from './modules/index'

Vue.use(Vuex)

const state = {}

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  getters,
  actions,
  modules: {
    project,
    auth,
    index
  },
  strict: debug
})
