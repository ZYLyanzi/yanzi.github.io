import userApi from '@/resources/user'

export default {
	namespaced:true,
	state: {
		info:{
			name:'',
			avatar:'',
			phone:'',
			openid:''
		},
	},
	getters: {
    info: s => s.info,
	},
	actions: {
		getUserInfo(c,params) {
      userApi.getUserInfo(params).then(res => {
				if (res.data){
					c.commit('setStatue',true);
				}
			})
		},
	},
	mutations: {
		setStatue(state,data){
			state.getStatus = data
		}
	}
}
