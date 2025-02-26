import { RouteRecordRaw } from 'vue-router';
import _auth from './_auth';
import _info from './_info';
import _settings from './_settings';
import _user from './_user';
import _penelitian from './_penelitian';

const routes: RouteRecordRaw[] = [
	// layout auth
	{
		path: '/',
		name: 'Auth',
		component: () => import('layouts/AuthLayout.vue'),
		children: _auth,
	},

	// layout main
	{
		path: '/',
		component: () => import('layouts/MainLayout.vue'),
		children: [
			{
				path: 'home',
				component: () => import('src/pages/home/HomeIndex.vue'),
				meta: { title: 'Home' },
			},
			{
				path: 'penelitian',
				meta: { title: 'Penelitian' },
				children: _penelitian,
			},
			{
				path: 'info',
				meta: { title: 'Info' },
				children: _info,
			},
			{
				path: 'settings',
				meta: { title: 'Setting' },
				children: _settings,
			},
			{
				path: 'user',
				meta: { title: 'User' },
				children: _user,
			},
		],
	},

	// Always leave this as last one,
	// but you can also remove it
	{
		path: '/:catchAll(.*)*',
		component: () => import('src/pages/errors/ErrorNotFound.vue'),
	},
];

export default routes;
