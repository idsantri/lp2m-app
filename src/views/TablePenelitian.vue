<template lang="">
	<q-table
		class="q-px-sm"
		:rows="penelitian"
		:columns="columns"
		row-key="id"
		:loading="loading"
		@row-click="(evt, row, index) => $router.push(`/penelitian/${row.id}`)"
		:filter="filter"
	>
		<template v-slot:top-right>
			<q-input
				outlined
				dense
				debounce="300"
				v-model="filter"
				placeholder="Cari"
			>
				<template v-slot:append>
					<q-icon name="search" />
				</template>
			</q-input>
		</template>
	</q-table>
	<!-- <pre>{{ penelitian }}</pre> -->
</template>
<script setup>
import { format } from 'date-fns';
import { ref } from 'vue';

defineProps({
	penelitian: { type: Array, required: true },
	loading: { type: Boolean, required: true, default: false },
});

const filter = ref('');
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
		name: 'periode',
		label: 'Periode',
		align: 'left',
		field: 'periode',
		sortable: true,
	},
	{
		name: 'user_name',
		label: 'Peneliti',
		align: 'left',
		field: 'user_name',
		sortable: true,
	},
	{
		name: 'status_proposal',
		label: 'Status Proposal',
		align: 'left',
		field: 'status_proposal',
		sortable: true,
	},
];
</script>
<style lang=""></style>
