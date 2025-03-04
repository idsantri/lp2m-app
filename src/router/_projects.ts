export default [
	{
		path: '',
		component: () => import('src/pages/projects/IndexPage.vue'),
		meta: { title: 'Projects' },
	},
	{
		path: ':id',
		component: () =>
			import('src/pages/projects/ProjectDetailContainer.vue'),
		meta: { title: 'Project Detail' },
	},
];
