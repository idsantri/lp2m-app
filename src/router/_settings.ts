export default [
	{
		path: '',
		redirect: () => 'settings/users',
	},
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
	{
		path: 'lists',
		component: () => import('src/pages/settings/lists/ListsIndex.vue'),
		meta: { title: 'Setting: List' },
		children: [
			{
				path: ':listKey',
				component: () =>
					import('src/pages/settings/lists/ListsByKey.vue'),
			},
		],
	},
];
