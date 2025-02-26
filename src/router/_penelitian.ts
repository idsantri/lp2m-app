export default [
	{
		path: '',
		component: () => import('src/pages/penelitian/IndexPenelitian.vue'),
		meta: { title: 'Penelitian' },
	},
	{
		path: ':id',
		component: () =>
			import('src/pages/penelitian/by-id/DetailPenelitian.vue'),
		meta: { title: 'Penelitian' },
	},
];
