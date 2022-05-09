import Vue from 'vue'
import App from './App.vue'
import { setMain } from './utils/main'

Vue.config.productionTip = false

import router from './router'

let instance = null;
const render = () => {
  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount('#app-vue2')
}

//  非微前端框架时, 执行 rander 函数, 正常运行项目
if (!window.__MICRO_WEB__) {
  render()
}

//#region 微前端框架中控制的几个生命周期函数
//  开始加载应用
export const bootstrap = () => {
  console.log("bootstrap")
}

//  渲染
export const mount = (app) => {
  render()
  setMain(app)
  // app.appInfo.header.changeHeader(false)

}

//  卸载
export const unmount = () => {
  console.log('unmount', instance)
  // 处理销毁应用事件等操作
}
//#endregion 微前端框架中控制的几个生命周期函数