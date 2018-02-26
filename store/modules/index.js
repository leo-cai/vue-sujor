import {SET_LIGHT_ON} from '../mutation-type'

// init state
const state = {
  isLightOn: true,
  titleList: [{'url': '/code', 'name': 'CODE'}, {'url': '/article', 'name': 'ARTICLE'}]
}

// getters
const getters = {
  isLightOn: state => state.isLightOn,
  titleList: state => state.titleList
}

// actions
const actions = {
  //
}

// mutations
const mutations = {
  [SET_LIGHT_ON] (state, isLightOn) {
    state.isLightOn = isLightOn
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
