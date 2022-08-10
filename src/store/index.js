/*
 * @Author: Pan Jingyi
 * @Date: 2022-08-09 03:09:50
 * @LastEditTime: 2022-08-11 01:08:02
 */
import { createStore } from 'vuex'
import mutations from './mutations'
import storage from './../utils/storage'

const state = {
  userInfo: '' || storage.getItem('userInfo') //获取用户信息
}

export default createStore({
  state,
  mutations
})
