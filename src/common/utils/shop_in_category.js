
function get_origin(origin,a,arr) {

	// 将当前分类ID存入来源数组
	origin.push(a)

	// 分类ID为零时退出循环
	if(parseInt(a) === 0) return origin

	// 将当前分类父ID存入来源数组
	if(arr[a]) {
		origin.push(arr[a].parentId)
	}

	// 递归调用
	return get_origin(origin,arr[a].parentId,arr)

}
/*
* a: 子类
* b: 父类
* categories: 完整的分类数组（一维数组）
*/
export default (a, b, categories) => {

	let arr = {}, origin = []

	// 遍历分类列表，生成类数组对象
	categories.forEach(v => {
		arr[v.categoryId] = v
	})

	// 遍历查找a分类来源，生成数组
	a.forEach(v => {
		origin = get_origin(origin,v.categoryId,arr)
	})

	// 遍历b分类，如果a来源数组中存在b分类Id，则认为a分类从属于b分类
	return b.some(v => {
		return origin.indexOf(v.categoryId) >= 0
	})
}