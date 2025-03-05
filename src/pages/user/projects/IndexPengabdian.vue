<template lang="">
	<q-card class="" style="">
		<CardHeader>
			<span class="text-weight-light"> Data Pengabdian </span>
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
		<TableProjects
			:data="projects"
			:loading="loading"
			filter-by="pengabdian"
		/>
	</q-card>
	<q-dialog v-model="crud">
		<CrudProject
			:data="{ jenis: 'Pengabdian' }"
			@success-submit="(r) => $router.push(`/projects/${r.id}`)"
			@success-delete="null"
		/>
	</q-dialog>
</template>
<script setup>
import apiGet from 'src/api/api-get';
import { onMounted, ref } from 'vue';
import CardHeader from 'src/components/CardHeader.vue';
import CrudProject from 'src/views/CrudProject.vue';
import TableProjects from 'src/views/TableProjectsFiltered.vue';
import authStore from 'src/stores/auth-store';

const loading = ref(false);
const projects = ref([]);
const crud = ref(false);
const { getUser: user } = authStore();

async function loadData() {
	const data = await apiGet({
		endPoint: 'projects/by-user',
		loading,
	});
	if (data) {
		projects.value = data.projects;
	}
	// console.log(data.projects);
}

onMounted(async () => {
	await loadData();
});
</script>
<style lang=""></style>
