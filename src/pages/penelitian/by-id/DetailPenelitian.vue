<template lang="">
	<q-card class="" style="max-width: 600px">
		<CardHeader
			>Detail Penelitian

			<template v-slot:action>
				<q-btn
					no-caps
					icon="sync"
					dense
					class="q-px-sm q-mr-sm"
					outline
					@click="loadData"
				/>
			</template>
		</CardHeader>

		<q-card-section class="q-pa-sm">
			<div v-if="loading">
				<q-spinner-cube
					color="brown-12"
					size="8em"
					class="flex q-ma-lg q-mx-auto"
				/>
			</div>
			<div v-else>
				<q-card bordered flat>
					<q-list>
						<q-item-label
							header
							class="q-py-sm bg-brown-1 text-brown-10"
						>
							Peneliti
						</q-item-label>
						<q-item
							clickable
							v-ripple
							:to="`/settings/users/${user.id}`"
						>
							<q-item-section avatar>
								<q-avatar>
									<img
										:src="
											user?.avatar_url
												? user.avatar_url
												: '/user-default.png'
										"
									/>
								</q-avatar>
							</q-item-section>
							<q-item-section>
								<q-item-label overline>
									{{ user.full_name }}
								</q-item-label>
								<q-item-label>{{ user.prodi }}</q-item-label>
								<q-item-label caption>
									{{ user.nidn }}
								</q-item-label>
							</q-item-section>
						</q-item>
					</q-list>
				</q-card>
				<q-card bordered flat class="q-mt-sm">
					<q-tabs
						v-model="tab"
						dense
						class="text-brown-1 bg-brown-5"
						active-color="brown-1"
						active-bg-color="brown-7"
						indicator-color="brown-11"
						align="justify"
						narrow-indicator
					>
						<q-tab name="subject" label="Subyek" no-caps />
						<q-tab name="proposal" label="Proposal" no-caps />
						<q-tab name="laporan" label="Laporan" no-caps />
					</q-tabs>

					<q-separator />

					<q-tab-panels v-model="tab" animated>
						<q-tab-panel name="subject" class="q-pa-sm">
							<div
								class="bg-brown-11 q-pa-sm flex items-center justify-between"
							>
								<div class="text-subtitle1 q-ml-sm">
									Detail Penelitian
								</div>
								<q-btn
									no-caps
									label="Edit"
									icon="edit"
									dense
									class="q-px-md q-mr-sm"
									outline
									@click="crudPenelitian = true"
								/>
							</div>
							<TabPenelitian
								:penelitian="penelitian"
								@success-submit-proposal="loadData"
								@success-delete-proposal="loadData"
								@success-submit-laporan="loadData"
								@success-delete-laporan="loadData"
							/>
						</q-tab-panel>

						<q-tab-panel name="proposal" class="q-pa-sm">
							<TabProposal :proposal="proposal" />
						</q-tab-panel>

						<q-tab-panel name="laporan" class="q-pa-sm">
							<TabLaporan :laporan="laporan" />
						</q-tab-panel>
					</q-tab-panels>
				</q-card>
			</div>
		</q-card-section>
	</q-card>
	<q-dialog v-model="crudPenelitian">
		<CrudPenelitian
			:data="penelitian"
			@success-submit="(r) => (penelitian = r)"
			@success-delete="$router.push('/user/penelitian')"
		/>
	</q-dialog>
</template>
<script setup>
import apiGet from 'src/api/api-get';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import CardHeader from 'src/components/CardHeader.vue';
import TabPenelitian from './TabPenelitian.vue';
import TabProposal from './TabProposal.vue';
import TabLaporan from './TabLaporan.vue';

import CrudPenelitian from 'src/views/CrudPenelitian.vue';

const { params } = useRoute();
const loading = ref(false);
const penelitian = ref({});
const proposal = ref([]);
const laporan = ref([]);
const user = ref({});
const tab = ref('subject');

const crudPenelitian = ref(false);

async function loadData() {
	const data = await apiGet({
		endPoint: `penelitian/${params.id}`,
		loading,
	});
	if (data) {
		// console.log('🚀 ~ loadData ~ data:', data)
		penelitian.value = data.penelitian;
		proposal.value = data.proposal;
		laporan.value = data.laporan;
		user.value = data.user;
	}
}

onMounted(async () => {
	await loadData();
});
</script>
<style lang="scss" scoped></style>
