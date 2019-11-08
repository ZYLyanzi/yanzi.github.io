import inCategory from './shop_in_category'
// const usableCoupons = (coupons, products) => {

// }


// *计算最佳优惠券
// *params: {coupons: array, products: array}

// const optimalCoupon = (coupons, products) => {

// }

const getCoupons = ( products, coupons, categories) => {
	// console.log('coupons:',coupons)
	// console.log('products:', products)
	// console.log('categories:', categories)

	let optimalCoupon = false, usableCoupons = []

	coupons = coupons.sort((a,b) => {
		return a.id - b.id
	})

	let cache_coupons_id = []

	for(let cv of coupons.values()) {
		//
		// if(cache_coupons_id.includes(cv.couponsId)) {
		// 	continue
		// }

		let usableProducts = [], total = 0

		for(let pv of products.values()) {
			if(inCategory(pv.categories, cv.categoryVOs, categories)) {
				usableProducts.push(pv)
				total += pv.number * pv.rmbPrice
			}
		}

		if(usableProducts.length < 1) { // 可用券为空时，跳出循环
			continue
		}

		if(cv.type == 0 && total < cv.useEnough) { // 没达到满减条件时，跳出循环
			continue
		}

		if(!optimalCoupon) {
			optimalCoupon = cv
		}else {
			optimalCoupon = cv.rmbPrice>optimalCoupon.rmbPrice? cv : optimalCoupon
		}

		usableCoupons.push(cv)
		cache_coupons_id.push(cv.couponsId)
	}


	return {usableCoupons, optimalCoupon}
}


export default getCoupons;

export {
	optimalCoupon, usableCoupons
}
