import Vue from 'vue'

Vue.filter('format_cash', function (value) {
	if(!value) return 0

	return value/100
})

Vue.filter('format_integral',function(value) {
	if(!value) return 0

	return value/100
})