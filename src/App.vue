<template>
		<router-view></router-view>
</template>

<script>
	import {user_agent, wx_js_sdk} from  '@/common/utils'
	export default {
		name: 'App',
		created() {
			if(user_agent === 'wechat'){
				wx_js_sdk.config();
			}

		},
		mounted(){
		},
		methods: {
		},
		watch:{
		}
	};
</script>

<style>
</style>
