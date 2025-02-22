export default [
	{
		path: '',
		redirect: () => 'info/release',
	},
	{
		path: 'release',
		component: () => import('src/pages/info/ReleasePage.vue'),
		meta: { title: 'Info: Release' },
	},
];
