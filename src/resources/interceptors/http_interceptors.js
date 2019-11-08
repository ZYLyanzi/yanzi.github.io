import router from '@/router'
import {user_agent, get_query, go_login} from '@/common/utils'


import axios from 'axios'
import {Loading, Message} from 'element-ui'

import config from '@/config'
axios.defaults.timeout = config.timeout;
axios.defaults.baseURL = config.host;


// 根据不同的状态码，生成不同的提示信息
const showStatus = (status) => {
  let message = ''
  switch (status) {
    case 400:
      message = '请求错误(400)'
      break;
    case 401:
      message = '未授权，请重新登录(401)'
      break;
    case 403:
      message = '拒绝访问(403)'
      break;
    case 404:
      message = '请求出错(404)'
      break;
    case 408:
      message = '请求超时(408)'
      break;
    case 500:
      message = '服务器错误(500)'
      break;
    case 501:
      message = '服务未实现(501)'
      break;
    case 502:
      message = '网络错误(502)'
      break;
    case 503:
      message = '服务不可用(503)'
      break;
    case 504:
      message = '网络超时(504)'
      break;
    case 505:
      message = 'HTTP版本不受支持(505)'
      break;
    default:
      message = `连接出错(${status})!`
  }
  return message;
};


// http request 拦截器
axios.interceptors.request.use(config => {

  //请求头设置
	// config.headers['Token'] =  'token';

	return config

},error => {
  Message.error({
    message:'服务器异常'
  })
	return Promise.reject(error)
})

// http response 拦截器
axios.interceptors.response.use(res => {

  //这里可以与后台协商返回码，统一处理通用返回码
  // if(res.data.code > 1){
  //   Message.error({
  //     message:res.data.msg
  //   })
  // }
  const status = res.status
  if (status < 200 || status >= 300) {
    // 处理http错误，抛到业务代码
    let msg = showStatus(status)
    Message.error({
      message: msg
    });
    return
  }

  return res.data

},error => {

  	//判断请求超时
	// Toast({
	// 	message: '请求失败',
	// 	position: 'middle',
	// 	duration: 2000
	// });
	// let originalRequest = error.config;
	// if(error.code == 'ECONNABORTED' && error.message.indexOf('timeout')!=-1 && !originalRequest._retry){
	// 	console.log("error.code", error.code);
	// 	router.replace({
	// 		path: '/network_error',
	// 		query: {redirect: router.currentRoute.fullPath}
	// 	});
	// 	// return axios.request(originalRequest);
	// }
	return Promise.reject(error)

});

export default axios
