<template lang="">
	<q-table
		class="q-px-sm"
		:rows="penelitian"
		:columns="columns"
		row-key="id"
		:loading="loading"
		@row-click="(evt, row, index) => $router.push(`/penelitian/${row.id}`)"
	/>
</template>
<script setup>
import { format } from 'date-fns';

defineProps({
	penelitian: { type: Array, required: true },
	loading: { type: Boolean, required: true, default: false },
});
const columns = [
	{
		name: 'created_at',
		label: 'Dibuat',
		align: 'left',
		field: 'created_at',
		sortable: true,
		format: (value) => format(new Date(value), 'yyyy-MM-dd'),
	},
	{
		name: 'judul',
		label: 'Judul',
		align: 'left',
		field: 'judul',
		sortable: true,
	},
	{
		name: 'name',
		label: 'Peneliti',
		align: 'left',
		field: 'name',
		sortable: true,
	},
	{
		name: 'status_proposal',
		label: 'Status Proposal',
		align: 'left',
		field: 'status_proposal',
		sortable: true,
	},
	{
		name: 'status_laporan',
		label: 'Status Laporan',
		align: 'left',
		field: 'status_laporan',
		sortable: true,
	},
];
</script>
<style lang=""></style>
