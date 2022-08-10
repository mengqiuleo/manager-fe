/*
 * @Author: Pan Jingyi
 * @Date: 2022-08-09 03:09:50
 * @LastEditTime: 2022-08-11 02:50:24
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        changOrigin: true, //是否开启代理
        target: 'http://localhost:3000'
      }
    }
  }
})
