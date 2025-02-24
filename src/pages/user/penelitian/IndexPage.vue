<template lang="">
	<q-card class="" style="">
		<CardHeader
			>Data Penelitian

			<template v-slot:action>
				<q-btn
					no-caps
					label="Tambah"
					icon="add"
					dense
					class="q-px-md q-mr-sm"
					outline
					@click="crud = true"
				/>
			</template>
		</CardHeader>

		<q-table
			class="q-px-sm"
			:rows="penelitian"
			:columns="columns"
			row-key="id"
			:loading="loading"
			@row-click="
				(evt, row, index) => $router.push(`/user/penelitian/${row.id}`)
			"
		/>
	</q-card>
	<q-dialog v-model="crud">
		<CrudPenelitian
			:data="{}"
			@success-submit="(r) => $router.push(`/user/penelitian/${r.id}`)"
			@success-delete="null"
		/>
	</q-dialog>
</template>
<script setup>
import { format } from 'date-fns';
import apiGet from 'src/api/api-get';
import { onMounted, ref } from 'vue';
import CardHeader from 'src/components/CardHeader.vue';
import CrudPenelitian from './CrudPenelitian.vue';

const loading = ref(false);
const penelitian = ref([]);
const crud = ref(false);
async function loadData() {
	const data = await apiGet({
		endPoint: 'user/penelitian',
		loading,
	});
	penelitian.value = data.penelitian;
	// console.log(data.penelitian);
}

onMounted(async () => {
	await loadData();
});

const columns = [
	{
		name: 'cr_at',
		label: 'Dibuat',
		align: 'left',
		field: 'cr_at',
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
