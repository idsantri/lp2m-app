<template lang="">
	<q-card class="" style="">
		<CardHeader>
			<span class="text-weight-light"> Data Penelitian </span>
			<span class="text-subtitle1">
				{{ user.full_name }}
			</span>
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
		<TablePenelitian :penelitian="penelitian" :loading="loading" />
	</q-card>
	<q-dialog v-model="crud">
		<CrudPenelitian
			:data="{}"
			@success-submit="(r) => $router.push(`/penelitian/${r.id}`)"
			@success-delete="null"
		/>
	</q-dialog>
</template>
<script setup>
import apiGet from 'src/api/api-get';
import { onMounted, ref } from 'vue';
import CardHeader from 'src/components/CardHeader.vue';
import CrudPenelitian from 'src/views/CrudPenelitian.vue';
import TablePenelitian from 'src/views/TablePenelitian.vue';
import authStore from 'src/stores/auth-store';

const loading = ref(false);
const penelitian = ref([]);
const crud = ref(false);
const { getUser: user } = authStore();

async function loadData() {
	const data = await apiGet({
		endPoint: 'penelitian/by-user',
		loading,
	});
	if (data) {
		penelitian.value = data.penelitian;
	}
	// console.log(data.penelitian);
}

onMounted(async () => {
	await loadData();
});
</script>
<style lang=""></style>
