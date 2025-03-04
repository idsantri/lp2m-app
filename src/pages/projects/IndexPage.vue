<template lang="">
	<q-card class="" style="">
		<CardHeader>
			<span class="text-weight-light">
				Data Penelitian dan Pengabdian
			</span>
			<span class="text-subtitle1">(All)</span>
		</CardHeader>
		<TableProjects :data="projects" :loading="loading" />
	</q-card>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import apiGet from 'src/api/api-get';
import TableProjects from 'src/views/TableProjects.vue';
import CardHeader from 'src/components/CardHeader.vue';

const loading = ref(false);
const projects = ref([]);

async function loadData() {
	const data = await apiGet({
		endPoint: 'projects',
		loading,
	});
	if (data) {
		projects.value = data.projects;
	}
}

onMounted(async () => {
	await loadData();
});
</script>
<style lang=""></style>
