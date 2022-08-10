/*
 * @Author: Pan Jingyi
 * @Date: 2022-08-11 00:51:53
 * @LastEditTime: 2022-08-11 01:02:53
 */
import request from './../utils/request'
export default {
  login(params) {
    return request({
      url: '/users/login',
      method: 'post',
      data: params,
      mock: true
    })
  }
}
