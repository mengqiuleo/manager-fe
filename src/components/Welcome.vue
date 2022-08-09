<template>
  <h1>欢迎来到welcome界面</h1>
  <router-link to="/login">去登录</router-link>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Welcome',
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped></style>
