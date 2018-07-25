import Vue from 'vue'
import App from './App'
import '../static/weui.css'
import '../common/2.wxss'
// appData:{
//   hotcityId: null
// }
var Fly=require("flyio/dist/npm/wx") 
var fly=new Fly
 //添加全局配置、拦截器等
Vue.prototype.$http=fly //将fly实例挂在vue原型上
fly.interceptors.request.use((config,promise)=>{
  //给所有请求添加自定义header
  config.headers["X-Tag"]="flyio";
  return config;
})
//配置请求基地址
fly.config.baseURL='https://www.easy-mock.com/mock/5b30c2ab2959342ac627f2b9/juejin/'


Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()



export default {
  
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [ '^pages/home/main', 'pages/my/main','pages/cityList/main','pages/search/main','pages/tuijianTitle/main'],
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

new Vue({
  data() {
      return {
        hotcityId:null
      };
  },
});