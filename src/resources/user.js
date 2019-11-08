import ajax from 'axios'
import api from './apis/user.api'


export default {
  /**
   * 添加用户
   */
  addUserInfo(params){
		return ajax.get(api.addUserInfo, {params: params})
	},
  /**
   * 查询用户
   */
  getUserInfo(params){
		return ajax.post(api.getUserInfo, params)
	},
}


