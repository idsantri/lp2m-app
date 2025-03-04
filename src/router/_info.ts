export default [
	{
		path: '',
		redirect: () => 'info/about',
	},
	{
		path: 'release',
		component: () => import('src/pages/info/release/ReleasePage.vue'),
		meta: { title: 'Info: Release' },
	},
	{
		path: 'about',
		component: () => import('src/pages/info/about/AboutPage.vue'),
		meta: { title: 'Info: About' },
	},
];
