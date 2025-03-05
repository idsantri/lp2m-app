export default [
	{
		path: '',
		component: () => import('src/pages/projects/IndexPage.vue'),
		meta: { title: 'Projects' },
	},
	{
		path: 'penelitian',
		component: () => import('src/pages/projects/IndexPenelitian.vue'),
		meta: { title: 'Penelitian' },
	},
	{
		path: 'pengabdian',
		component: () => import('src/pages/projects/IndexPengabdian.vue'),
		meta: { title: 'Projects' },
	},
	{
		path: ':id(\\d+)',
		component: () =>
			import('src/pages/projects/by-id/ProjectDetailContainer.vue'),
		meta: { title: 'Project Detail' },
	},
];
