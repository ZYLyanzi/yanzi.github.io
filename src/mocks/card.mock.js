import axios from 'axios/index';
import MockAdapter from 'axios-mock-adapter/types';
import api from '../apis/card.api'

let result = {
	code: 1,
	tips: 1,
	msg: "",
	desc: "",
	data: {}
};
export default {
	bootstrap() {
		let mock = new MockAdapter(axios)
		mock.onGet(api.getList).reply(req => {
			let res = {
				hasMore: true,
				list: [{
					couponsId: 12,
					type: 1,
					color: '#ff9200',
					identificationCode: 'bahfyeabgkblabd',
					useStartDate: "2018-01-01 10:12:20",
					useEndDate: "2018-01-02 10:12:20",
					state: 0,
					name: '100元通用券',
					rmbValue: 100,
					integralValue: 299,
					useEnough: '满299可用',
					image: 'https://cdn-img.17weima.com/mall2020/201712/1513239397832.jpg',
					couponsCategory: [
						{
							categoryId: 12,
							categoryName: '服装类'
						}
					]
				},
					{
						couponsId: 12,
						type: 1,
						color: '#7400ff',
						identificationCode: 'bahfyeabgkblabd',
						useStartDate: "2018-01-01 10:12:20",
						useEndDate: "2018-01-02 10:12:20",
						state: 0,
						name: '全场通用券',
						rmbValue: 100,
						integralValue: 299,
						useEnough: '满299可用',
						image: 'https://cdn-img.17weima.com/mall2020/201712/1513239397832.jpg',
						couponsCategory: [
							{
								categoryId: 12,
								categoryName: '服装类'
							}
						]
					},
					{
						couponsId: 12,
						type: 1,
						color: '#00a1ff',
						identificationCode: 'bahfyeabgkblabd',
						useStartDate: "2018-01-01 10:12:20",
						useEndDate: "2018-01-02 10:12:20",
						state: 0,
						name: '全场通用券',
						rmbValue: 100,
						integralValue: 299,
						useEnough: '满299可用',
						image: 'https://cdn-img.17weima.com/mall2020/201712/1513239397832.jpg',
						couponsCategory: [
							{
								categoryId: 12,
								categoryName: '服装类'
							}
						]
					},
					{
						couponsId: 12,
						type: 1,
						color: '#ff5e00',
						identificationCode: 'bahfyeabgkblabd',
						useStartDate: "2018-01-01 10:12:20",
						useEndDate: "2018-01-02 10:12:20",
						state: 0,
						name: '全场通用券',
						rmbValue: 100,
						integralValue: 299,
						useEnough: '满299可用',
						image: 'https://cdn-img.17weima.com/mall2020/201712/1513239397832.jpg',
						couponsCategory: [
							{
								categoryId: 12,
								categoryName: '服装类'
							}
						]
					}
					]
			}
			result.data = res;
			return new Promise((resolve, reject) => {
				resolve([200, result])
			})
		});

		mock.onGet(api.getInfo).reply(req => {
			if (req.id = 1) {

			}
			let res = {
				productId: 2,
				name: "微马运动防晒帽-酷炫黑",
				type: 1,
				rmbPriceMin: 9,
				rmbPriceMax: 12,
				integralPriceMin: 99,
				integralPriceMax: 299,
				description: '',
				coverImage: "https://cdn-img.17weima.com/mall2020/201712/1513239397832.jpg",
			}

			result.data = res
			return new Promise((resolve, reject) => {
				resolve([200, result])
			})
		})


	}
}
