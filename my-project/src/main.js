import Vue from 'vue'
import App from './App'
import '../static/weui.css'
import '../common/2.wxss'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [ '^pages/home/main', 'pages/my/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '美团门票',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#272636",
      selectedColor: "#0897ff",
      backgroundColor: "#fff",
      borderStyle: "#a8a8a8",
      list: [
        {
          pagePath: "pages/home/main",
          iconPath: "static/images/home.png",
          selectedIconPath: "static/images/home-selected.png",
          color:"white",
          text: "首页"
        },
        {
          pagePath: "pages/my/main",
          iconPath: "static/images/my.png",
          selectedIconPath: "static/images/my-secected.png",
          text: "我的"
        }
      ]
    }
  }
}