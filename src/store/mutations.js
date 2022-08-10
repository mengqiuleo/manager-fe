/*
 * @Author: Pan Jingyi
 * @Date: 2022-08-11 01:04:55
 * @LastEditTime: 2022-08-11 01:11:43
 */
import storage from './../utils/storage'

export default {
  saveUserInfo(state, userInfo) {
    state.userInfo = userInfo
    storage.setItem('userInfo', userInfo)
  }
}
