import user_agent from '@/common/utils/user_agent'

export default (order_no, order_from, callback_url ) => {

	if(user_agent === 'android') {
		window.wm_share.startWxPay(order_no,order_from,callback_url);
	}else if(user_agent === 'ios') {
		window.webkit.messageHandlers.Pay.postMessage({order_no,order_from,callback_url});
	}else if(user_agent === 'wechat') {

	}else if(user_agent === 'web') {

	}else {

	}
}