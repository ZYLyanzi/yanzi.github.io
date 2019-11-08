import axios from 'axios/index';
import MockAdapter from 'axios-mock-adapter/types';


import product from '../apis/product.api'
import card from '../apis/card.api'

import productData from './product.mock'
import cardData from './card.mock'

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
		mock.onGet(product.getList).reply(req => {
			let res = productData.listData;
			console.log(" productData.listData",  res)
			result.data = res;
			return new Promise((resolve, reject) => {
				resolve([200, result])
			})
		});

		mock.onGet(product.getInfo).reply(req => {
			if (req.id = 1) {

			}
			let res = {
				product_id: 2,
				cover_image: "https://cdn-img.17weima.com/mall2020/201712/1513239397832.jpg",
				index: 0,
				name: "微马运动防晒帽-酷炫黑",
				price: 3400,
				product_id: 9,
				product_property_list: "",
				sale_quantity: 673,
				sku_str: "",
				state: 1,
				stock_quantity: 127,
			}
			result.data = res
			return new Promise((resolve, reject) => {
				resolve([200, result])
			})
		});


		mock.onGet(card.getList).reply(req => {
			let res = cardData.listData;
			console.log(" cardData.listData",  res)
			result.data = res;
			return new Promise((resolve, reject) => {
				resolve([200, result])
			})
		});
		mock.onGet(card.getInfo).reply(req => {
			if (req.id = 1) {
			}
			let res = {
				product_id: 2,
				cover_image: "https://cdn-img.17weima.com/mall2020/201712/1513239397832.jpg",
				index: 0,
				name: "微马运动防晒帽-酷炫黑",
				price: 3400,
				product_id: 9,
				product_property_list: "",
				sale_quantity: 673,
				sku_str: "",
				state: 1,
				stock_quantity: 127,
			}
			result.data = res
			return new Promise((resolve, reject) => {
				resolve([200, result])
			})
		})


	}
}
