import api from '../apis/project'

// init state
const state = {
  projects: []
}

// getters
const getters = {
  projects: state => state.projects
}

// actions
const actions = {
  getProjects ({commit, state}, params) {
    let promise = api.getProjects(params.limit, params.page)
    promise.then((response) => {
      console.log(response.data)
      commit('setProjects', response.data.projects)
    }).catch((error) => {
      console.log(error)
      commit('setProjects', [])
    })
  }
}

// mutations
const mutations = {
  setProjects (state, projects) {
    state.projects = projects
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
