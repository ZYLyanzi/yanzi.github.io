import integralapi from '../apis/integral.api'
// console.log(api)
export default function (mock, result) {
	mock.onGet(integralapi.getList).reply(req => {
		// console.log(integralapi)
		let res = {
			hasMore: true,
			list: [
				{
					kind: '0',
					createdAt: '2018-01-01 10:12:20',
					integral: '-3300',
					description: '消费',
				},
				{
					kind: '0',
					createdAt: '2018-01-01 10:12:20',
					integral: '-3300',
					description: '消费',
				},
				{
					kind: '0',
					createdAt: '2018-01-01 10:12:20',
					integral: '+3300',
					description: '收益',
				},
				{
					kind: '0',
					createdAt: '2018-01-01 10:12:20',
					integral: '+3300',
					description: '收益',
				},
				{
					kind: '0',
					createdAt: '2018-01-01 10:12:20',
					integral: '+3300',
					description: '收益',
				},
				{
					kind: '0',
					createdAt: '2018-01-01 10:12:20',
					integral: '+3300',
					description: '收益',
				},
				{
					kind: '0',
					createdAt: '2018-01-01 10:12:20',
					integral: '+3300',
					description: '收益',
				},
				{
					kind: '0',
					createdAt: '2018-01-01 10:12:20',
					integral: '+3300',
					description: '收益',
				},
				{
					kind: '0',
					createdAt: '2018-01-01 10:12:20',
					integral: '+3300',
					description: '收益',
				},
				{
					kind: '0',
					createdAt: '2018-01-01 10:12:20',
					integral: '+3300',
					description: '收益',
				},
				{
					kind: '0',
					createdAt: '2018-01-01 10:12:20',
					integral: '+3300',
					description: '收益',
				},
				{
					kind: '0',
					createdAt: '2018-01-01 10:12:20',
					integral: '+3300',
					description: '收益',
				},
				{
					kind: '0',
					createdAt: '2018-01-01 10:12:20',
					integral: '+3300',
					description: '收益',
				},
			],
			integral: 10000,
		};
		result.data = res;
		return new Promise((resolve, reject) => {
			resolve([200, result])
		})
	});
}

