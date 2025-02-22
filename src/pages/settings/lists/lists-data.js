const data = [
	{
		url: 'prodi',
		label: 'Prodi',
		style: 'single',
		column: 1,
		protected: false,
		sort: 'asc',
	},
	{
		url: 'status-review',
		label: 'Status Review',
		style: 'single',
		column: 1,
		protected: false,
		sort: 'asc',
	},
];

const listData = Object.values(data).sort((a, b) => {
	return a.label > b.label ? 1 : -1;
});

export default listData;
