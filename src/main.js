import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/css/swiper.css'
import './assets/css/index.css'
import Axios from 'axios'
import NProgress from "nprogress"
import 'nprogress/nprogress.css'
// 设置axios的请求根路径
Axios.defaults.baseURL = 'http://192.168.20.101:9003/api/pc/'

// 拦截axios,并加上请求头
Axios.interceptors.request.use(config => {
  // 在发起请求的时候加上加载条
  NProgress.start();
  //拦截axios，添加请求头
  config.headers.Authorization = {
    "content-length": "33",
    "content-type": "application/json;charset=UTF-8",
    "date": "Thu, 17 Sep 2020 12:10:45 GMT",
    "x-application-context": "application:dev:9003",
    // "cookie": "SESSION=6b38c4f5-893c-4444-9d9a-ede4898659b2; Path=/api/pc/; HttpOnly"
  }
  //最后必须return config
  return config
})
Axios.interceptors.response.use(config => {
  NProgress.done();
  return config
})
//更改Vue的$http原型为Axios
Vue.prototype.$http = Axios
Vue.use(VueAwesomeSwiper).use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
