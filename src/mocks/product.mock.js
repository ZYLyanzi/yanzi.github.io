import axios from 'axios/index';
import MockAdapter from 'axios-mock-adapter/types';
import api from '../apis/product.api'

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
				list: [
					{
						productId: 11,
						name: '运动帽子',
						type: 1,
						rmbPriceMin: 99,
						rmbPriceMax: 299,
						integralPriceMin: 990,
						integralPriceMax: 2990,
						coverImage: 'https://cdn-img.17weima.com/mall2020/201712/1513239397832.jpg'
					},
					{
						productId: 11,
						name: '运动帽子',
						type: 1,
						rmbPriceMin: 99,
						rmbPriceMax: 299,
						integralPriceMin: 990,
						integralPriceMax: 2990,
						coverImage: 'https://cdn-img.17weima.com/mall2020/201712/1513239397832.jpg'
					},
					{
						productId: 11,
						name: '运动帽子',
						type: 1,
						rmbPriceMin: 99,
						rmbPriceMax: 299,
						integralPriceMin: 990,
						integralPriceMax: 2990,
						coverImage: 'https://cdn-img.17weima.com/mall2020/201712/1513239397832.jpg'
					},
					{
						productId: 11,
						name: '运动帽子',
						type: 1,
						rmbPriceMin: 99,
						rmbPriceMax: 299,
						integralPriceMin: 990,
						integralPriceMax: 2990,
						coverImage: 'https://cdn-img.17weima.com/mall2020/201712/1513239397832.jpg'
					},
					{
						productId: 11,
						name: '运动帽子',
						type: 1,
						rmbPriceMin: 99,
						rmbPriceMax: 299,
						integralPriceMin: 990,
						integralPriceMax: 2990,
						coverImage: 'https://cdn-img.17weima.com/mall2020/201712/1513239397832.jpg'
					},
					{
						productId: 11,
						name: '运动帽子',
						type: 1,
						rmbPriceMin: 99,
						rmbPriceMax: 299,
						integralPriceMin: 990,
						integralPriceMax: 2990,
						coverImage: 'https://cdn-img.17weima.com/mall2020/201712/1513239397832.jpg'
					}
				]
			};
			result.data = res;
			return new Promise((resolve, reject) => {
				resolve([200, result])
			})
		});

		mock.onGet(api.getInfo).reply(req => {
			if (req.id = 1) {

			}
			let res = {
					productId: 11,
					name: '运动帽子',
					type: 1,
					rmbPriceMin: 99,
					rmbPriceMax: 299,
					integralPriceMin: 990,
					integralPriceMax: 2990,
					description: '无敌帅的帽子',
					coverImage: 'https://cdn-img.17weima.com/mall2020/201712/1513239397832.jpg',
					detailImage: [
						'https://cdn-img.17weima.com/mall2020/201712/1513239397832.jpg',
						'https://cdn-img.17weima.com/mall2020/201712/1513239397832.jpg',
						'https://cdn-img.17weima.com/mall2020/201712/1513239397832.jpg',
						'https://cdn-img.17weima.com/mall2020/201712/1513239397832.jpg',
					]
				};
			result.data = res;
			return new Promise((resolve, reject) => {
				resolve([200, result])
			})
		})


	}
}
