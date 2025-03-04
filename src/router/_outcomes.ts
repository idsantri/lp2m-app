export default [
	{
		path: ':id',
		component: () => import('src/pages/outcomes/OutcomeById.vue'),
		meta: { title: 'Outcome Detail' },
	},
];
