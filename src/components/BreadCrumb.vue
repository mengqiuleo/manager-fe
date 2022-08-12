<!--
 * @Author: Pan Jingyi
 * @Date: 2022-08-11 18:35:12
 * @LastEditTime: 2022-08-12 03:06:53
-->
<template>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="(item, index) in breadList" :key="item.path">
      <router-link to="/welcome" v-if="index == 0">{{
        item.meta.title
      }}</router-link>
      <span v-else>{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'BreadCrumb',
  computed: {
    breadList() {
      return this.$route.matched
    }
  },
  mounted() {
    console.log('面包屑：routers=>', this.$route)
  }
}
</script>
<style lang="scss" scoped></style>
