<template lang="">
	<q-table
		class="q-px-sm"
		:rows="filteredArray"
		:columns="columns"
		row-key="id"
		:loading="loading"
		@row-click="(evt, row, index) => $router.push(`/projects/${row.id}`)"
		:filter="filter"
		:rows-per-page-options="[10, 25, 50, 75, 100, 0]"
	>
		<template v-slot:top-left>
			<q-select
				style="width: 250px"
				outlined
				label="Filter proyek"
				dense
				:options="arrJenis"
				clearable
				v-model="jenis"
				emit-value
				map-options
				class="q-py-xs"
				behavior="menu"
			>
			</q-select>
		</template>
		<template v-slot:top-right>
			<q-input
				class="q-py-xs"
				style="width: 250px"
				outlined
				dense
				debounce="300"
				v-model="filter"
				placeholder="Cari"
				clearable
			>
				<template v-slot:append>
					<q-icon name="search" />
				</template>
			</q-input>
		</template>
	</q-table>
</template>
<script setup>
import { format } from 'date-fns';
import { ref, watchEffect } from 'vue';

const props = defineProps({
	data: { type: Array, required: true },
	loading: { type: Boolean, required: true, default: false },
});

const jenis = ref('');
const filteredArray = ref([]);

function getUniqueJenis(data) {
	const uniqueJenis = new Set();
	data.forEach((item) => {
		uniqueJenis.add(item.jenis);
	});
	return Array.from(uniqueJenis);
}
const arrJenis = ref([]);

watchEffect(() => {
	arrJenis.value = getUniqueJenis(props.data);

	if (!jenis.value) {
		filteredArray.value = props.data;
	} else {
		filteredArray.value = props.data.filter(
			(item) => item.jenis === jenis.value,
		);
	}
	// console.log(jenis.value);
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
		name: 'jenis',
		label: 'Jenis Proyek',
		align: 'left',
		field: 'jenis',
		sortable: true,
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
		name: 'proposal_status',
		label: 'Status Proposal',
		align: 'left',
		field: 'proposal_status',
		sortable: true,
	},
	{
		name: 'laporan_status',
		label: 'Status Laporan',
		align: 'left',
		field: 'laporan_status',
		sortable: true,
	},
];
</script>
<style lang=""></style>
