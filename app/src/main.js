import Vue from 'vue'
import App from './App.vue'
//三级联动组件---全局组件
import TypeNav from "@/components/TypeNav"
//三级联动组件---轮播图
import Carsousel from '@/components/Carsousel'
//三级联动组件---分页器
import Pagination from '@/components/Pagination'
//第一个参数:全局组件的名字 第二个参数:哪一个组件
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carsousel.name,Carsousel);
Vue.component(Pagination.name,Pagination);
//引入路由
import router from '@/router'
//引入仓库
import store from '@/store'
//引入MockServer.js----mock数据
import '@/components/mock/mockServer';
//引入swiper样式
import 'swiper/css/swiper.css';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //全局事件总线$bus设置
  beforeCreate(){
    Vue.prototype.$bus = this;
  },
  //注册路由:底下的写法KV一致省略V【router小写的】
  //可以让全部的组件(非路由|路由组件) 都可以获取到$route|$router属性
  //$route(路由):可以获取到路由信息(path、query、params)
  //$router:进行编程式导航路由跳转push||replace
  router,
  //注册仓库:组件实例的身上会多一个$store属性
  store
}).$mount('#app')
