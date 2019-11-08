export default {
	host: 'http://apptest.17weima.com',
	// host: 'https://appv2.17weima.com',
	// host: 'http://192.168.1.253',

	timeout: 10000,
	debug: true,
	pay_url: '',
	order_from: 'newmall',
	order_fromh5: 'newmallh5',
	environment: 'android',
	// 又拍云测试
	upyunConfig: {
		// bucket: 'wm-staging',
		// uploadUrl: 'http://v0.api.upyun.com/wm-staging',
		// imgUrl: 'http://wm-staging.b0.upaiyun.com'

		bucket: 'wm-production',
		uploadUrl: 'http://v0.api.upyun.com/wm-production',
		imgUrl: 'https://cdn-img.17weima.com'
	},
}