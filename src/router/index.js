import Vue from 'vue';
import Router from 'vue-router';
import ajax from 'axios'
Vue.use(Router);

const routes = [
	{
		path: '/home/:id',
		name: 'home',
		component: resolve => require([`@/views/home`],resolve)
	},
];

const router = new Router({	routes: routes
});

router.beforeEach((to, from, next) => {
	next();
});


export default router;
