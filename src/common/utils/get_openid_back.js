// import get_query from  './get_query'
// import config from '@/config'
//
// export default (detailUrl, path, fullPath) => {
// 	let Base64 = require('js-base64').Base64;
//
// 	let urlStats;
// 	if (get_query('openid') && get_query('openid') !== 'undefined' && get_query('openid') !== 'null') {
// 		urlStats = 1;
// 	}
// 	if (urlStats && sessionStorage.openIdStatus) {
// 		// if (sessionStorage.openIdStatus) {
// 		localStorage.url = fullPath;
// 		let openid = get_query('openid');
// 		let atoken = get_query('atoken');
//
// 		sessionStorage.openid = openid;
// 		sessionStorage.atoken = atoken;
// 		//微信openid查询用户信息
// 		history.replaceState('', '', '#' + path)
// 		return true;
// 	} else {
// 		sessionStorage.openIdStatus = 1;
// 		let appid = sessionStorage.appid;
//
// 		let host;
// 		if( /^appv2.17weima.com/.test(window.location.host) ) {
// 			host = 'http%3A%2F%2Fappv2.17weima.com'
// 		}else {
// 			host = 'http%3A%2F%2Fapptest.17weima.com'
// 		}
// 		detailUrl = detailUrl + '!' + config.order_fromh5;
//
// 		let callback = host + '%2Fwm-pay-web%2Fpay%2Fwxpay%2FgetOpenId?reduri=' + Base64.encode(detailUrl);
// 		// let callback = 'http%3A%2F%2Fapptest.17weima.com%2Fwm-signup-web%2Fwxpay%2FgetOpenId?reduri=' + Base64.encode(detailUrl);
// 		// let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + callback + '&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect';
// 		let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+appid+'&redirect_uri=' + callback + '&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect';
// 		// let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + sessionStorage.appid + '&redirect_uri=' + callback + '&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect';
// 		window.location.href = url
// 	}
// }