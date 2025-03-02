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
		url: 'status-proposal',
		label: 'Status Proposal',
		style: 'single',
		column: 1,
		protected: false,
		sort: 'asc',
	},
	{
		url: 'status-laporan',
		label: 'Status Laporan',
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
	{
		url: 'periode',
		label: 'Periode',
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
