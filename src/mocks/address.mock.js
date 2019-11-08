import api from '../apis/address.api'
export default (mock, result) => {
	mock.onGet(api.list).reply(req => {
		let res = {
			hasMore: true,
			list: [
				{
					id:1,
					userName:"王大龙",
					phoneNumber: 19823232323,
					province: '广东省',
					city:'深圳市',
					addressPost: '南山区水湾太子路',
					isDefault: false
				},
				{
					id:2,
					userName:"王se",
					phoneNumber: 19823232323,
					province: '广东省',
					city:'深圳市',
					addressPost: '南山区水湾太子路',
					isDefault: true
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

	mock.onPost(api.setDefault).reply(req => {
		let data = JSON.parse(req.data)
		let res = {
			id:data.id
		};
		result.data = res;
		return new Promise((resolve, reject) => {
			resolve([200, result])
		})
	});

	mock.onDelete(api.del).reply(req => {
		let res = {
			id:req.params.id
		};
		result.data = res;
		return new Promise((resolve, reject) => {
			resolve([200, result])
		})
	});
}

