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
		path: 'projects',
		component: () => import('src/pages/user/projects/IndexByUser.vue'),
	},
	{
		path: 'projects/penelitian',
		component: () => import('src/pages/user/projects/IndexPenelitian.vue'),
	},
	{
		path: 'projects/pengabdian',
		component: () => import('src/pages/user/projects/IndexPengabdian.vue'),
	},
];
