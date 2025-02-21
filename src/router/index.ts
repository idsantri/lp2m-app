import { route } from 'quasar/wrappers';
import {
	createMemoryHistory,
	createRouter,
	createWebHashHistory,
	createWebHistory,
} from 'vue-router';
import routes from './routes';
import { nextTick } from 'vue';
import authStore from '../stores/auth-store';
import config from 'src/config';
import { notifyError } from 'src/utils/notify';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
	const createHistory = process.env.SERVER
		? createMemoryHistory
		: process.env.VUE_ROUTER_MODE === 'history'
			? createWebHistory
			: createWebHashHistory;

	const Router = createRouter({
		scrollBehavior: () => ({ left: 0, top: 0 }),
		routes,

		// Leave this as is and make changes in quasar.conf.js instead!
		// quasar.conf.js -> build -> vueRouterMode
		// quasar.conf.js -> build -> publicPath
		history: createHistory(process.env.VUE_ROUTER_BASE),
	});

	Router.beforeEach((to, _from, next) => {
		if (to.fullPath === '/') {
			return next('/home');
		}

		if (to.fullPath.includes('home')) {
			return next();
		}

		const store = authStore();
		const isAuthenticate = store.getIsLogin;

		const authRoutes = ['Register', 'Login', 'Forgot', 'Reset', 'Verify'];
		const toAuthRoutes = authRoutes.includes(to.name as string);

		if (!toAuthRoutes && !isAuthenticate) {
			history.go(-1);
			notifyError('Anda perlu login!');
			// next('/login');
		} else if (toAuthRoutes && isAuthenticate) {
			history.go(-1);
		} else {
			next();
		}
	});

	const DEFAULT_TITLE = config.PWA_SHORT_NAME;
	Router.afterEach((to) => {
		nextTick(() => {
			document.title = to.meta.title
				? DEFAULT_TITLE + ' — ' + to.meta.title
				: DEFAULT_TITLE;
		});
	});

	return Router;
});
