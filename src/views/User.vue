<!--
 * @Author: Pan Jingyi
 * @Date: 2022-08-11 23:15:13
 * @LastEditTime: 2022-08-12 15:49:41
-->
<template>
  <div class="user-manager">
    <div class="query-form">
      <el-form ref="form" :inline="true" :model="user">
        <el-form-item label="用户ID" prop="userId">
          <el-input v-model="user.userId" placeholder="请输入用户ID"></el-input>
        </el-form-item>
        <el-form-item label="用户名称" prop="userName">
          <el-input
            v-model="user.userName"
            placeholder="请输入用户名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="state">
          <el-select v-model="user.state">
            <el-option :value="0" label="所有"></el-option>
            <el-option :value="1" label="在职"></el-option>
            <el-option :value="2" label="离职"></el-option>
            <el-option :value="3" label="试用期"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleQuery">查询</el-button>
          <el-button @click="handleReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="base-table">
      <div class="action">
        <el-button type="primary" size="small">新增</el-button>
        <el-button type="danger" size="small" @click="handlePatchDel"
          >批量删除</el-button
        >
      </div>
      <el-table :data="userList" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column
          v-for="item in columns"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :formatter="item.formatter"
        />
        <el-table-column label="操作" width="150">
          <template #default="scope">
            <el-button
              size="small"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button type="danger" size="small" @click="handleDel(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-button">
        <el-pagination
          small
          background
          layout="prev, pager, next"
          :total="pager.total"
          :page-size="pager.pageSize"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref, getCurrentInstance } from 'vue'
import api from './../api'
import { ElMessage } from 'element-plus'
export default {
  name: 'user',
  setup() {
    const { ctx } = getCurrentInstance()
    const user = reactive({
      state: 1
    })
    const userList = ref([])
    const pager = reactive({
      pageNum: 1,
      pageSize: 10
    })
    const columns = reactive([
      {
        label: '用户ID',
        prop: 'userId'
      },
      {
        label: '用户名',
        prop: 'userName'
      },
      {
        label: '用户邮箱',
        prop: 'userEmail'
      },
      {
        label: '用户角色',
        prop: 'role',
        formatter(row, column, value) {
          return {
            0: '管理员',
            1: '普通用户'
          }[value]
        }
      },
      {
        label: '用户状态',
        prop: 'state',
        formatter(row, column, value) {
          return {
            1: '在职',
            2: '离职',
            3: '试用期'
          }[value]
        }
      },
      {
        label: '注册时间',
        prop: 'createTime'
      },
      {
        label: '最后登录时间',
        prop: 'lastLoginTime'
      }
    ])
    const checkedUserIds = ref([])
    onMounted(() => {
      bind()
      getUserList()
    })
    const bind = () => {
      ctx.$api = api
    }
    const getUserList = async () => {
      let params = { ...user, ...pager }
      const { list, page } = await ctx.$api.getUserList(params)
      console.log('ctx.$api 成功绑定')
      userList.value = list
      pager.total = page.total
    }
    const handleQuery = () => {
      getUserList()
    }
    const handleReset = () => {
      ctx.$refs.form.resetFields()
    }
    const handleCurrentChange = (current) => {
      pager.pageNum = current
      getUserList()
    }
    const handleDel = async (row) => {
      await ctx.$api.handleDel({
        userIds: [row.userId]
      })
      //ctx.$message.success('删除成功')
      ElMessage({
        message: '删除成功',
        type: 'success'
      })
      getUserList()
    }
    const handlePatchDel = async () => {
      if (checkedUserIds.value.length === 0) {
        ElMessage({
          message: '请选择要删除的用户',
          type: 'error'
        })
        return
      }
      const res = await ctx.$api.handleDel({
        userIds: checkedUserIds.value
      })
      if (res.nModified > 0) {
        ElMessage({
          message: '删除成功',
          type: 'success'
        })
        getUserList()
      } else {
        ElMessage({
          message: '删除失败',
          type: 'warning'
        })
      }
    }
    const handleSelectionChange = (list) => {
      let arr = []
      list.map((item) => {
        arr.push(item.userId)
      })
      checkedUserIds.value = arr
    }
    return {
      user,
      userList,
      columns,
      getUserList,
      pager,
      handleQuery,
      handleReset,
      handleCurrentChange,
      handleDel,
      bind,
      handlePatchDel,
      checkedUserIds,
      handleSelectionChange
    }
  }
}
</script>
<style lang="scss" scoped>
.pagination-button {
  display: flex;
  justify-content: flex-end;
  margin-right: 0px;
  text-align: right;
  padding: 10px;
}
</style>
