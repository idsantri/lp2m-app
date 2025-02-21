export default [
	{
		path: 'users',
		meta: { title: 'Setting: User' },
		children: [
			{
				path: '',
				component: () =>
					import('src/pages/settings/users/UserPage.vue'),
			},
			{
				path: ':id',
				component: () => import('src/pages/settings/users/UserId.vue'),
			},
		],
	},
];
