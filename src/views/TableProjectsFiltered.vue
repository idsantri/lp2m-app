<template lang="">
	<q-table
		class="q-px-sm"
		:rows="projects"
		:columns="columns"
		row-key="id"
		:loading="loading"
		@row-click="(evt, row, index) => $router.push(`/projects/${row.id}`)"
		:filter="filter"
		:rows-per-page-options="[10, 25, 50, 75, 100, 0]"
	>
		<template v-slot:top-right>
			<q-input
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
	filterBy: { type: String, required: true },
});

const filter = ref('');
const projects = ref([]);
watchEffect(() => {
	if (props.data?.length > 0) {
		projects.value = props.data.filter(
			(item) => item.jenis.toLowerCase() == props.filterBy.toLowerCase(),
		);
	}
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
		name: 'periode',
		label: 'Periode',
		align: 'left',
		field: 'periode',
		sortable: true,
	},
	{
		name: 'user_name',
		label: 'Pemohon',
		align: 'left',
		field: 'user_name',
		sortable: true,
	},
	{
		name: 'user_prodi',
		label: 'Prodi',
		align: 'left',
		field: 'user_prodi',
		sortable: true,
	},
	
];
</script>
<style lang=""></style>
