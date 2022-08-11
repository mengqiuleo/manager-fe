<!--
 * @Author: Pan Jingyi
 * @Date: 2022-08-11 16:46:03
 * @LastEditTime: 2022-08-11 17:37:29
-->
<template>
  <template v-for="menu in userMenu" :key="menu._id">
    <el-sub-menu
      v-if="
        menu.children &&
        menu.children.length > 0 &&
        menu.children[0].menuType == 1
      "
      :index="menu.path"
    >
      <template #title>
        <el-icon>
          <component :is="menu.icon" />
        </el-icon>
        <span>{{ menu.menuName }}</span>
      </template>
      <tree-menu :userMenu="menu.children"></tree-menu>
    </el-sub-menu>
    <el-menu-item
      v-else-if="menu.menuType == 1"
      :index="menu.path"
      :key="menu._id"
      >{{ menu.menuName }}</el-menu-item
    >
  </template>
</template>

<script>
export default {
  name: 'TreeMenu',
  props: {
    userMenu: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style lang="scss" scoped></style>
