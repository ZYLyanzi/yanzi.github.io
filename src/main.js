import "@/common/utils/vue_error_handle"
import "babel-polyfill";

import Vue from 'vue'

// element-ui 组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'
import store from './store/store'
import router from './router/index';

//引入请求拦截器
import axios from './resources/interceptors/http_interceptors'
//引入初始化样式
import '../static/css/base.css';
//引入js全局方法
import base from '@/common/base';
//引入全局过滤器
import filters from '@/common/filters'

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(base);

new Vue({
  	el: '#app',
  	store,
  	router,
  	components: { App},
  	template: '<App/>',
});
