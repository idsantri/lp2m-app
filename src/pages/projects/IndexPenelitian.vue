<template lang="">
	<q-card class="" style="">
		<CardHeader>
			<span class="text-weight-light"> Data Penelitian </span>
			<span class="text-subtitle1">(All)</span>
		</CardHeader>
		<TablePenelitian :penelitian="penelitian" :loading="loading" />
	</q-card>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import apiGet from 'src/api/api-get';
import TablePenelitian from 'src/views/TableProjects.vue';
import CardHeader from 'src/components/CardHeader.vue';

const loading = ref(false);
const penelitian = ref([]);

async function loadData() {
	const data = await apiGet({
		endPoint: 'projects',
		loading,
	});
	if (data) {
		penelitian.value = data.projects;
	}
}

onMounted(async () => {
	await loadData();
});
</script>
<style lang=""></style>
