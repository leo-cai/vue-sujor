import Vue from 'vue'
import * as config from '../config'

export default {
  getProjects (limit, page) {
    let apiUrl = `${config.API_ROOT}v1/projects?limit=${limit}&page=${page}`
    return Vue.http.get(apiUrl)
  }
}
