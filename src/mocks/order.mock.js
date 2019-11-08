import api from '../apis/order.api'
export default (mock, result) => {
	mock.onGet(api.list).reply(req => {
		console.log('req.params',req.params)
		let res = {
			hasMore: req.params.pageNum>9? (false) :true,
			pageSize: req.params.pageSize,
			pageNum: req.params.pageNum,
			list: [
				{
					orderId:1,
					createAt:'2018-03-29',
					state:1,
					no: "180328045620825698",//订单号
					orderType: 0,// 0积分，1人民币
					totalRmbValue: 99999.00,
					totalIntegralValue: 99999.99,
					logisticsInfo: {
						company: '顺丰快递',
						no: '54634564365',
						userName: '宁采臣',
						phoneNumber: 16651666232,
						address: '广东省榆林市兴业县隆安镇隆安村13号'
					},
					orderDetails: [
						{
							orderDetailId: 10,
							orderDetailType: 0,
							orderSummaryId: 6,
							productName: '商品壹',
							sku:'1233534',
							image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522306265112&di=0a1c84af9bc50d647607aee65d9342c5&imgtype=0&src=http%3A%2F%2Fwww.zhlzw.com%2FUploadFiles%2FArticle_UploadFiles%2F201204%2F20120412123912727.jpg',
							number: 1,
							rmbPrice: 999,
							integralPrice: 9990,
							properties: [
								{
									optionName: '护嗓',propertyName: '作用'
								},
								{
									optionName: '我的',propertyName: '难受'
								}
							],
						},
						{
							orderDetailId: 10,
							orderDetailType: 0,
							orderSummaryId: 6,
							productName: '商品贰',
							sku:'1233534',
							image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522306265112&di=0a1c84af9bc50d647607aee65d9342c5&imgtype=0&src=http%3A%2F%2Fwww.zhlzw.com%2FUploadFiles%2FArticle_UploadFiles%2F201204%2F20120412123912727.jpg',
							number: 1,
							rmbPrice: 999,
							integralPrice: 9990,
							properties: [
								{
									optionName: '护嗓',propertyName: '作用'
								},
								{
									optionName: '我的',propertyName: '难受'
								}
							],
						},
					]
				},
				{
					orderId:2,
					createAt:'2018-03-29',
					state:0,
					no: "180328045620825698",//订单号
					orderType: 0,// 0积分，1人民币
					totalRmbValue: 99999.00,
					totalIntegralValue: 99999.99,
					logisticsInfo: {
						company: '顺丰快递',
						no: '54586796797',
						userName: '宁采臣',
						phoneNumber: 16651666232,
						address: '广东省榆林市兴业县隆安镇隆安村13号'
					},
					orderDetails: [
						{
							orderDetailId: 10,
							orderDetailType: 0,
							orderSummaryId: 6,
							productName: '商品壹',
							sku:'1233534',
							image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522306265112&di=0a1c84af9bc50d647607aee65d9342c5&imgtype=0&src=http%3A%2F%2Fwww.zhlzw.com%2FUploadFiles%2FArticle_UploadFiles%2F201204%2F20120412123912727.jpg',
							number: 1,
							rmbPrice: 999,
							integralPrice: 9990,
							properties: [
								{
									optionName: '护嗓',propertyName: '作用'
								},
								{
									optionName: '我的',propertyName: '难受'
								}
							],
						},
						{
							orderDetailId: 10,
							orderDetailType: 0,
							orderSummaryId: 6,
							productName: '商品贰',
							sku:'1233534',
							image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522306265112&di=0a1c84af9bc50d647607aee65d9342c5&imgtype=0&src=http%3A%2F%2Fwww.zhlzw.com%2FUploadFiles%2FArticle_UploadFiles%2F201204%2F20120412123912727.jpg',
							number: 1,
							rmbPrice: 999,
							integralPrice: 9990,
							properties: [
								{
									optionName: '护嗓',propertyName: '作用'
								},
								{
									optionName: '我的',propertyName: '难受'
								}
							],
						},
					]
				},
			]

		};
		result.data = res;
		return new Promise((resolve, reject) => {
			resolve([200, result])
		})
	});

	mock.onPost(api.add).reply(req => {
		let res = {
			id:1
		};
		result.data = res;
		return new Promise((resolve, reject) => {
			resolve([200, result])
		})
	});

	mock.onGet(api.detail).reply(req => {

		let res = {
			orderId:1,
			createAt:'2018-03-29',
			state:0,
			no: "180328045620825698",//订单号
			orderType: 0,// 0积分，1人民币
			totalRmbValue: 99999.00,
			totalIntegralValue: 99999.99,
			logisticsInfo: {
				company: '顺丰快递',
				no: Date.now(),
				userName: '宁采臣',
				phoneNumber: 16651666232,
				address: '广东省榆林市兴业县隆安镇隆安村13号'
			},
			orderDetails: [
				{
					orderDetailId: 10,
					orderDetailType: 0,
					orderSummaryId: 6,
					productName: '商品壹',
					sku:'1233534',
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522306265112&di=0a1c84af9bc50d647607aee65d9342c5&imgtype=0&src=http%3A%2F%2Fwww.zhlzw.com%2FUploadFiles%2FArticle_UploadFiles%2F201204%2F20120412123912727.jpg',
					number: 1,
					rmbPrice: 999,
					integralPrice: 9990,
					properties: [
						{
							optionName: '护嗓',propertyName: '作用'
						},
						{
							optionName: '我的',propertyName: '难受'
						}
					],
				},
				{
					orderDetailId: 10,
					orderDetailType: 0,
					orderSummaryId: 6,
					productName: '商品贰',
					sku:'1233534',
					image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522306265112&di=0a1c84af9bc50d647607aee65d9342c5&imgtype=0&src=http%3A%2F%2Fwww.zhlzw.com%2FUploadFiles%2FArticle_UploadFiles%2F201204%2F20120412123912727.jpg',
					number: 1,
					rmbPrice: 999,
					integralPrice: 9990,
					properties: [
						{
							optionName: '护嗓',propertyName: '作用'
						},
						{
							optionName: '我的',propertyName: '难受'
						}
					],
				},
			],
			coupons: {
				name:'diyiyouhuiquan',
				rmbValue: 123.0
			}
		};
		result.data = res;
		return new Promise((resolve, reject) => {
			resolve([200, result])
		})
	});

	mock.onDelete(api.cancel).reply(req => {
		let res = {
			orderId:req.params.id
		};
		result.data = res;
		return new Promise((resolve, reject) => {
			resolve([200, result])
		})
	});
}

