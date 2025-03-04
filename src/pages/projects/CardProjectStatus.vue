<template lang="">
	<q-card class="" flat bordered>
		<q-card-section class="q-pa-sm">
			<div
				class="text-subtitle1 q-px-md bg-brown-1 flex justify-between items-center q-py-sm"
			>
				<div>Status</div>
				<div>
					<q-btn
						no-caps
						icon="sync"
						dense
						class="q-px-sm q-mr-sm"
						outline
						@click="loadData"
					/>
					<q-btn
						label="Atur"
						no-caps
						icon="tune"
						dense
						class="q-px-sm"
						outline
						@click="crud = true"
					/>
				</div>
			</div>
			<div v-if="loading">
				<q-spinner-cube
					color="brown-12"
					size="8em"
					class="flex q-ma-lg q-mx-auto"
				/>
			</div>
			<q-markup-table v-else flat wrap-cells>
				<tbody>
					<tr>
						<td class="label">Periode</td>
						<td class="">{{ projectStatus?.periode }}</td>
					</tr>
					<tr>
						<td class="label">Reviewer</td>
						<td class="">
							<RouterLink
								v-if="projectStatus?.reviewer_user_id"
								:to="`/settings/users/${projectStatus.reviewer_user_id}`"
							>
								{{ projectStatus.reviewer_user_name }}
							</RouterLink>
						</td>
					</tr>
					<tr>
						<td class="label">Status Proposal</td>
						<td class="">
							{{ projectStatus?.proposal_status }}
						</td>
					</tr>
					<tr>
						<td class="label">Keterangan Proposal</td>
						<td class="">
							{{ projectStatus?.proposal_keterangan }}
						</td>
					</tr>
					<tr>
						<td class="label">Status Laporan</td>
						<td class="">
							{{ projectStatus?.laporan_status }}
						</td>
					</tr>
					<tr>
						<td class="label">Keterangan Laporan</td>
						<td class="">
							{{ projectStatus?.laporan_keterangan }}
						</td>
					</tr>
				</tbody>
			</q-markup-table>
		</q-card-section>
	</q-card>

	<q-dialog v-model="crud">
		<CrudProjectStatus
			:data="projectStatus"
			:project-id="params.id"
			@success-submit="(r) => (projectStatus = r)"
			@success-delete="null"
		/>
	</q-dialog>
	<!-- {{ projectStatus }} -->
</template>
<script setup>
import apiGet from 'src/api/api-get';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import CrudProjectStatus from 'src/views/CrudProjectStatus.vue';

const { params } = useRoute();
const loading = ref(false);
const projectStatus = ref({});

const crud = ref(false);

async function loadData() {
	const data = await apiGet({
		endPoint: 'projects-status',
		params: { project_id: params.id },
		loading,
		notify: false,
	});
	if (data) {
		projectStatus.value = data.project_status;
	}
}

onMounted(async () => {
	await loadData();
});
</script>
<style lang="scss" scoped>
.label {
	width: 140px;
	font-weight: 300;
}
</style>
