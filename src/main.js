import Vue from 'vue'
import App from './App.vue'

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
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

//#region 微前端框架中控制的几个生命周期函数
//  开始加载应用
export const bootstrap = async () => {
  console.log("bootstrap")
}

//  渲染
export const mount = async (props) => {
  console.log(props, '- vue2 mount')
  props.footer.changeFooter(false)
  render()
  // props.footer.footerStatus(false)

  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev);
  });

  props.setGlobalState({
    a: 250,
    b: 520
  });
}

//  卸载
export const unmount = async () => {
  console.log('unmount', instance)
  // 处理销毁应用事件等操作
}
//#endregion 微前端框架中控制的几个生命周期函数