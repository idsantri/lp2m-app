export default [
	{
		path: '',
		component: () => import('src/pages/projects/IndexPenelitian.vue'),
		meta: { title: 'Projects' },
	},
	{
		path: ':id',
		component: () => import('src/pages/projects/DetailPenelitian.vue'),
		meta: { title: 'Project Detail' },
	},
];
