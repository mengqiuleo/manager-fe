/*
 * @Author: Pan Jingyi
 * @Date: 2022-08-10 01:44:49
 */
import config from './../config'

export default {
  getStorage() {
    //获取命名空间
    return JSON.parse(window.localStorage.getItem(config.namespace) || '{}')
  },
  setItem(key, val) {
    let storage = this.getStorage()
    storage[key] = val
    window.localStorage.setItem(config.namespace, JSON.stringify(storage))
  },
  getItem(key) {
    return this.getStorage()[key]
  },
  clearItem(key) {
    let storage = this.getStorage()
    delete storage[key]
    window.localStorage.setItem(config.namespace, JSON.stringify(storage))
  },
  clearAll() {
    window.localStorage.clear()
  }
}
