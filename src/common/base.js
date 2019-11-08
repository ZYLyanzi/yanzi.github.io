exports.install = function (Vue, options) {
	Vue.prototype.goBack = function (){
		this.$router.go(-1)
	};
};

document.body.addEventListener("focusout", () => {
	setTimeout(() => {
		const scrollHeight =
			document.documentElement.scrollTop || document.body.scrollTop || 0;
		window.scrollTo(0, Math.max(scrollHeight - 1, 0));
	}, 100);
});