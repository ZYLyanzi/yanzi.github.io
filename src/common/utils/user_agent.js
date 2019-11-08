//浏览器判断
import config from '@/config'
function itUserAgent() {

	// if(config.debug && config.environment) return config.environment;

	var ua = window.navigator.userAgent.toLowerCase();
	// console.log("浏览器判断", ua);

	let index = ua.lastIndexOf("\/");
	let latUa = ua.substring(index + 1, ua.length);
	// console.log("浏览器判断", latUa);

	let arr = latUa.split('.');

	if (ua.match(/android\//i) == 'android/') {
		return 'android'
	} else if (ua.match(/native_ios/i) == 'native_ios') {
		return 'ios';
	} else if (ua.match(/MicroMessenger/i) == 'micromessenger') {
		return 'wechat';
	} else {
		return 'web';
		// return 'ios';

	}
}
export default itUserAgent()