/*
 * @Author: Pan Jingyi
 * @Date: 2022-08-11 00:51:53
 * @LastEditTime: 2022-08-11 21:00:10
 */
import request from './../utils/request'
export default {
  login(params) {
    return request({
      url: '/users/login',
      method: 'post',
      data: params,
      mock: false
    })
  },
  noticeCount() {
    return request({
      url: '/leave/count',
      method: 'get',
      data: {}
    })
  },
  getMenuList() {
    return request({
      url: '/menu/list',
      method: 'get',
      data: {}
    })
  }
}
