<script>
export default {
  head: {
    title: 'Sujor | 登录'
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // 登录
    signIn () {
      if (!this.username || !this.password) {
        this.$message({
          message: '用户名和密码不能为空',
          type: 'warning'
        })
        return
      }
      const user = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('signIn', {this: this, user: user})
    }
  },
  created () {
    this.$store.dispatch('checkToken', {this: this})
  }
}
</script>

<template>
  <el-row class="app-sign-wrapper">
    <div class="app-sign-input-wrapper">
      <el-row type="flex" justify="center" class="mb-20">
        <el-col>
          <el-input placeholder="请输入用户名" v-model="username"></el-input>
        </el-col>
      </el-row>
    </div>
    <div class="app-sign-input-wrapper">
      <el-row type="flex" justify="center" class="mb-20">
        <el-col>
          <el-input placeholder="请输入密码" @keyup.enter.native="signIn()" type="password" v-model="password"></el-input>
        </el-col>
      </el-row>
    </div>
    <div class="app-sign-input-wrapper">
      <el-row type="flex" justify="center" class="mb-20">
        <el-col>
          <el-button type="primary" style="width: 100%" @click="signIn()">登录</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="app-sign-input-wrapper">
      <el-row type="flex" justify="center" class="mb-20">
        <el-col>
          <p>
            没有账号？
            <router-link to="/admin/signup">立即注册</router-link>
          </p>
        </el-col>
      </el-row>
    </div>
  </el-row>
</template>

<style lang="stylus" scoped>
  @import "../../assets/styles/admin/auth.styl"
</style>
