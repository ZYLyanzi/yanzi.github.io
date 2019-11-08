import axios from 'axios/index';
import MockAdapter from 'axios-mock-adapter/types';
import order from './order.mock'
import address from './address.mock'
import coupon from './coupon.mock'
import integral from './integral.mock'
export default {
	bootstrap() {
		let mock = new MockAdapter(axios)
		let result = {
			code: 1,
			tips: 1,
			msg: "",
			desc: "",
			data: {}
		};
		order.call(this,mock,result);
		address.call(this,mock,result);
		integral.call(this,mock,result);
		coupon.call(this,mock,result);
	}
}
