<!--
 * @Author: Pan Jingyi
 * @Date: 2022-08-09 03:09:50
-->
<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    //this.$storage.setItem('age', 30)
  }
}
</script>

<style lang="scss">
@import './assets/style/index.scss';
@import './assets/style/reset.css';
</style>
