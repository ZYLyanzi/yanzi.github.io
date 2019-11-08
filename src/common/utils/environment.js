
/*android */
if(typeof window.wm_share != 'object') {
	window.wm_share = {}
}
if(typeof window.wm_share.startWxPay != 'function') {
	window.wm_share.startWxPay = function() {
		alert('支付方法不存在');
		return
	}
}
if(typeof window.wm_share.go2Login != 'function') {
	window.wm_share.go2Login = function() {
		alert('登录方法不存在');
		return
	}
}
if(typeof window.wm_share.goBack != 'function') {
	window.wm_share.goBack = function() {
		alert('后退方法不存在');
		return
	}
}


/*ios */
if(typeof window.webkit != 'object') {
	window.webkit = {
		messageHandlers: {
			Pay: {
				postMessage() {
					alert('支付方法不存在');
				}
			},

			go2Login: {
				postMessage() {
					alert('登录方法不存在');
				}
			},

			goBack: {
				postMessage() {
					alert('后退方法不存在');
				}
			},

		}
	}
}
