import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from '../store'
import axios from 'axios'

// mark down editor
import VueSimplemde from 'vue-simplemde'

// highlight
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

// element-ui
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 全局配置axios
axios.defaults.timeout = 120000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

Vue.config.productionTip = false
// Vue.prototype.$axios = axios
Vue.http = axios

Vue.use(ElementUi)
Vue.use(VueSimplemde)
Vue.use(hljs)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
