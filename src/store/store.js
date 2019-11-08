import Vuex from 'vuex'
import Vue from 'vue'
import user from './modules/user'


Vue.use(Vuex);
export default new Vuex.Store({
	modules: {
	  //引入模块
		user
	},
	state: {
	  //可存储全局通用的数据
	},
	getters: {
	},
	mutations: {
		goBack(){
			this.$router.go(-1)
		},
		LOGIN(state, data){
			sessionStorage.token = data;
		},
		LOGOUT(state, data){
			sessionStorage.removeItem('token');
		},
		TITLE(state, data){
			document.title = data;
		}
	}
})
