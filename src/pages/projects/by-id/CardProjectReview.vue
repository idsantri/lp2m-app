<template>
	<q-card flat bordered>
		<q-card-section class="q-pa-sm">
			<q-tabs
				v-model="tab"
				class="text-brown-5 bg-brown-1"
				active-color="brown-1"
				active-bg-color="brown-6"
				indicator-color="brown-11"
				align="left"
				:breakpoint="0"
			>
				<q-tab
					name="proposal"
					label="Proposal"
					no-caps
					v-if="!isPengabdian"
				/>
				<q-tab name="laporan" label="Laporan" no-caps />
			</q-tabs>
			<q-tab-panels v-model="tab" class="q-mt-sm">
				<q-tab-panel name="proposal" class="no-padding">
					<TemplateReview variant="proposal" />
				</q-tab-panel>

				<q-tab-panel name="laporan" class="no-padding">
					<TemplateReview variant="laporan" />
				</q-tab-panel>
			</q-tab-panels>
		</q-card-section>
	</q-card>
</template>
<script setup>
import { ref, watchEffect } from 'vue';
import TemplateReview from 'src/views/TemplateReview.vue';

const props = defineProps({
	isPengabdian: { type: Boolean, required: true },
});

const tab = ref('');
watchEffect(() => {
	props.isPengabdian ? (tab.value = 'laporan') : (tab.value = 'proposal');
});
</script>
<style lang="scss" scoped></style>
