<template lang="">
	<TablePenelitian :penelitian="penelitian" :loading="loading" />

	<!-- {{ penelitian }} -->
</template>
<script setup>
import { onMounted, ref } from 'vue';
import apiGet from 'src/api/api-get';
import TablePenelitian from 'src/views/TablePenelitian.vue';

const loading = ref(false);
const penelitian = ref([]);

async function loadData() {
	const data = await apiGet({
		endPoint: 'penelitian',
		loading,
	});
	if (data) {
		penelitian.value = data.penelitian;
	}
}

onMounted(async () => {
	await loadData();
});
</script>
<style lang=""></style>
