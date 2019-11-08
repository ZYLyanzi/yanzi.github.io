export default (user_agent) => {

	if(user_agent == 'android') {
		window.wm_share.go2Login();
	}else if(user_agent == 'ios') {
		window.webkit.messageHandlers.go2Login.postMessage(null);
	}

}