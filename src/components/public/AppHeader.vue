<script>
import _ from '../../../utils/underscore.js'
export default {
  data () {
    return {
      searchValue: ''
    }
  },
  computed: {
    titleList () {
      return this.$store.getters.titleList
    }
  },
  methods: {
    // 注销
    signOut: function () {
      this.$store.dispatch('signOut', {this: this})
    }
  },
  directives: {
    fix: {
      inserted (el) {
        let beforeScrollTop = document.documentElement.scrollTop || window.pageYOffset || window.scrollY || document.body.scrollTop
        window.addEventListener('scroll', _.throttle(() => {
          let afterScrollTop = document.documentElement.scrollTop || window.pageYOffset || window.scrollY || document.body.scrollTop
          let delta = afterScrollTop - beforeScrollTop
          if (delta === 0) return false
          delta > 0 ? el.classList.add('fixed') : el.classList.remove('fixed')
          afterScrollTop > 0 ? el.classList.add('darken') : el.classList.remove('darken')
          setTimeout(() => {
            beforeScrollTop = afterScrollTop
          }, 0)
        }, 200))
      },
      unbind () {
        window.onscroll = null
      }
    }
  }
}
</script>

<template>
  <header v-fix>
    <div class="app-header">
      <div class="app-header-left">
        <router-link to="/" >
          <img src="../../assets/images/logo.svg" onerror="this.onerror=null; this.src='../../assets/image/logo.png'" ondragstart="return false;" class="app-header-logo" alt="logo" />
        </router-link>
      </div>
      <div class="app-header-middle">
        <router-link :to="title.url" v-for="title in titleList" :key="title.name" v-text="title.name"></router-link>
      </div>
      <div class="app-header-right">
        <a href="javascript:;" @click="signOut()">
          <img src="../../assets/images/light_off.svg" onerror="this.onerror=null; this.src='../../assets/image/light_off.png'" ondragstart="return false;" class="app-header-light" alt="light" />
          <img src="../../assets/images/light_on.svg" onerror="this.onerror=null; this.src='../../assets/image/light_on.png'" ondragstart="return false;" class="app-header-light" alt="light" />
        </a>
      </div>
    </div>
  </header>
</template>

<style lang="stylus" scoped>
  @import "../../assets/styles/public/app_header.styl"
</style>
