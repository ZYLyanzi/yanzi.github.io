import api from '../apis/coupon.api'
let list = [
	{
		couponsId:1,
		type:1,//1抵用券,2满减券
		identificationCode: 19823232323,
		useStartDate:'2018-03-28 10:12:23',
		useEndDate:'2018-03-28 10:12:23',
		state:0,//0不上架，1上架
		name: '全场通用券',
		rmbValue: 100,
		integralValue: 1000,
		useEnough: 299,
		image: '/static/img/111111.jpg',
		color:'rgb(253,96,81)',
		couponsCategory: [
			{
				categoryId: 12,
				categoryName: '服装类'
			},
			{
				categoryId: 13,
				categoryName: '海王类'
			},
		]
	},
	{
		couponsId:2,
		type:2,//1抵用券,2满减券
		identificationCode: 19823232323,
		useStartDate:'2018-03-28 10:12:23',
		useEndDate:'2018-03-28 10:12:23',
		state:0,//0不上架，1上架
		name: '海王类肉券',
		rmbValue: 100,
		integralValue: 1000,
		useEnough: 299,
		image: '/static/img/111111.jpg',
		color:'rgb(253,96,81)',
		couponsCategory: [
			{
				categoryId: 13,
				categoryName: '海王类'
			},
		]
	},
]
export default (mock, result) => {
	mock.onGet(api.getList).reply(req => {
		req.params = {}
		let res = {
			hasMore: true,
			list: list,
			total: 100,
			pageSize: req.params.pageSize?req.params.pageSize:10,
			pageSize: req.params.pageNum?req.params.pageNum:1,

		};
		result.data = res;
		return new Promise((resolve, reject) => {
			resolve([200, result])
		})
	});

	mock.onGet(api.mycoupons).reply(req => {
		let res = {
			hasMore: true,
			list: list,
			total: 100,
			pageSize: req.params.pageSize?req.params.pageSize:10,
			pageSize: req.params.pageNum?req.params.pageNum:1,
		};
		result.data = res;
		return new Promise((resolve, reject) => {
			resolve([200, result])
		})
	});

}

