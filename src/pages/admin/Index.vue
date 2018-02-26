<script>
export default {
  computed: {
    // 登录用户信息
    signInUser () {
      let storeUser = this.$store.getters.signInUser
      console.log(typeof storeUser)
      // 防刷新页面，从localStorage取数据并commit
      if (Object.keys(storeUser).length === 0) {
        let localUser = JSON.parse(localStorage.getItem('signInUser'))
        this.$store.commit('SET_SIGNIN_USER', localUser)
      }
      return this.$store.getters.signInUser
    },
    // 用户权限
    permissions () {
      let storePermissions = this.$store.getters.permissions
      // 防刷新页面，从localStorage取数据并commit
      if (storePermissions.length === 0) {
        let localPermissions = localStorage.getItem('permissions')
        this.$store.commit('SET_PERMISSIONS', localPermissions)
      }
      return this.$store.getters.permissions
    }
  },
  methods: {
    // 注销
    signOut () {
      let username = this.signInUser.username
      this.$store.dispatch('signOut', {this: this, user: {username: username}})
    },
    // 路由
    toAdmin () {
      this.$router.push({path: '/admin'})
    },
    toUserList () {
      this.$router.push({path: '/admin/userlist'})
    }
  },
  created () {
    // 检查登录状态
    this.$store.dispatch('checkSignIn', {this: this})
    // 获取权限列表
    let username = this.signInUser.username
    if (username !== undefined) {
      this.$store.dispatch('getPermissions', {this: this, user: {username: username}})
    }
  }
}
</script>

<template>
  <div class="admin-wrapper">
    <div class="admin-header">
      <router-link to="/admin">Sujor  |  后台系统</router-link>
    </div>
    <div class="admin-left">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#333333"
        text-color="#fff"
        active-text-color="#c9799e">
        <el-menu-item index="1" @click.native="toAdmin()">
          <i class="el-icon-time"></i>
          <span slot="title">后台首页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">
              <i class="el-icon-tickets"></i>
              <span slot="title">用户列表</span>
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-view"></i>
              <span slot="title">用户权限</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">标题管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-edit"></i>
          <span slot="title">留言管理</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-document"></i>
          <span slot="title">文章管理</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-setting"></i>
          <span slot="title">系统设置</span>
        </el-menu-item>
        <el-menu-item index="7" @click.native="signOut()">
          <i class="el-icon-warning"></i>
          <span slot="title">退出登录</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="admin-right">
      <div>
        <span v-text="signInUser.username"></span>
        <span>欢迎回来！</span>
      </div>
      <div>
        <span>上次登录时间：</span>
        <span v-text="signInUser.signed_at"></span>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import "../../assets/styles/admin/index.styl"
</style>
