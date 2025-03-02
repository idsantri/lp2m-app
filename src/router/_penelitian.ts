export default [
	{
		path: '',
		component: () => import('src/pages/penelitian/IndexPenelitian.vue'),
		meta: { title: 'Penelitian' },
	},
	{
		path: ':id',
		component: () => import('src/pages/penelitian/DetailPenelitian.vue'),
		meta: { title: 'Penelitian' },
	},
];
