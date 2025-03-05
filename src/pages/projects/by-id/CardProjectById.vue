<template lang="">
	<q-card class="" flat bordered>
		<q-card-section class="q-pa-sm">
			<div
				class="text-subtitle1 q-px-md bg-brown-1 flex justify-between items-center q-py-sm"
			>
				<div>Subyek {{ project?.jenis?.toUpperCase() }}</div>
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
						label="Edit"
						no-caps
						icon="edit"
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
						<td class="label">Tanggal Buat</td>
						<td class="">
							{{ formatDate(project.created_at, 'dd MMMM yyyy') }}
						</td>
					</tr>
					<tr>
						<td class="label">Pemohon</td>
						<td class="">
							<RouterLink
								:to="`/settings/users/${project.user_id}`"
							>
								{{ project.user_name }}
							</RouterLink>
						</td>
					</tr>

					<tr>
						<td class="label">Judul</td>
						<td class="text-weight-medium">
							{{ project.judul }}
						</td>
					</tr>

					<tr>
						<td class="label">Anggota</td>
						<td class="">{{ project.anggota }}</td>
					</tr>
				</tbody>
			</q-markup-table>
		</q-card-section>
	</q-card>

	<q-dialog v-model="crud">
		<CrudProject
			:data="project"
			@success-submit="(r) => (project = r)"
			@success-delete="$router.go(-1)"
		/>
	</q-dialog>
	<!-- {{ projectStatus }} -->
</template>
<script setup>
import apiGet from 'src/api/api-get';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import CrudProject from 'src/views/CrudProject.vue';
import { formatDate } from 'src/utils/format-date';

const { params } = useRoute();
const loading = ref(false);
const project = ref({});
const projectStatus = ref({});

const crud = ref(false);

async function loadData() {
	const data = await apiGet({
		endPoint: `projects/${params.id}`,
		loading,
	});
	if (data) {
		// console.log('🚀 ~ loadData ~ data:', data);
		project.value = data.project;
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
