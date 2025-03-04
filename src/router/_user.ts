export default [
	{
		path: '',
		redirect: () => 'user/profile',
	},
	{
		path: 'profile',
		component: () => import('src/pages/user/profile/ProfileIndex.vue'),
		meta: { title: 'User Profile' },
	},
	{
		path: 'penelitian',
		component: () => import('src/pages/user/penelitian/IndexByUser.vue'),
	},
	{
		path: 'extend',
		component: () => import('src/pages/user/extend/IndexPage.vue'),
	},
];
