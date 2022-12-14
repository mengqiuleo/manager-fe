/*
 * @Author: Pan Jingyi
 * @Date: 2022-08-09 23:23:49
 */
const env = process.env.NODE_ENV || 'prod'
const EnvConfig = {
  development: {
    baseApi: '/api',
    mockApi:
      'https://www.fastmock.site/mock/3579b457727b5e8f2f27b05eb3ca67eb/api'
  },
  prod: {
    baseApi: '',
    mockApi:
      'https://www.fastmock.site/mock/3579b457727b5e8f2f27b05eb3ca67eb/api'
  }
}

export default {
  env,
  mock: false,
  namespace: 'manager',
  ...EnvConfig[env]
}
