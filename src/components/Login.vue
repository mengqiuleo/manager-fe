<template>
  <h1>欢迎来到login界面</h1>
  <el-button @click="goHome">回首页</el-button>
</template>

<script>
export default {
  name: 'Login',
  mounted() {
    // this.$request({
    //   method: 'get',
    //   url: '/login',
    //   data: {
    //     name: 'jack'
    //   }
    // }).then((res) => {
    //   console.log(res)
    // })

    this.$request
      .get('/login', { name: 'jack' }, { mock: true, loading: true })
      .then((res) => {
        console.log(res)
      })
  },
  methods: {
    goHome() {
      this.$router.push('/welcome')
    }
  }
}
</script>

<style lang="scss" scoped></style>
