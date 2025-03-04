export default [
	{
		path: ':id',
		component: () => import('src/pages/reviews/ReviewById.vue'),
		meta: { title: 'Review Detail' },
	},
];
