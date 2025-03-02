<template>
	<q-card>
		<q-tabs
			v-model="tab"
			class="text-brown-1 overflow-hidden bg-brown-7"
			active-color="brown-1"
			active-bg-color="brown-10"
			indicator-color="brown-1"
			align="left"
		>
			<q-tab name="proposal" label="Proposal" no-caps />
			<q-tab name="laporan" label="Laporan" no-caps />
		</q-tabs>
		<q-tab-panels v-model="tab" class="">
			<q-tab-panel name="proposal" class="q-pa-sm">
				<TemplateReview variant="proposal" />
			</q-tab-panel>

			<q-tab-panel name="laporan" class="q-pa-sm">
				<TemplateReview variant="laporan" />
			</q-tab-panel>
		</q-tab-panels>
	</q-card>
</template>
<script setup>
import { ref } from 'vue';
const tab = ref('proposal');
import TemplateReview from './TemplateReview.vue';
</script>
<style lang="scss" scoped></style>
