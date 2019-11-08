import Vue from 'vue'
import config from '@/config'
var ua = window.navigator.userAgent.toLowerCase();
var index = ua.lastIndexOf("\/");
var latUa = ua.substring(index + 1, ua.length);
var arr = latUa.split('.');
var platform = 'pc'
if(ua.match(/android\//i) == 'android/') {
	platform = 'android';
}
if(ua.match(/iphone/i) == 'iphone') {
	platform = 'iphone';
}
if(ua.match(/MicroMessenger/i) == 'micromessenger'){
	platform = 'wechat';
}

Vue.config.errorHandler = function(err, vm, info) {
	// if(config.debug){
	// 	if(platform !== 'pc') {
	// 		alert(err.toString())
	// 	}
	// }
	// log = window.Log()
	// log.send({
	// 	msg: err.toString(),
	// 	remark: info
	// })
	console.error(err)
}