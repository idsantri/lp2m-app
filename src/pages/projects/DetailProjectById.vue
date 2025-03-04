<template lang="">
	<q-card class="" flat bordered>
		<q-card-section class="q-pa-sm">
			<div
				class="text-subtitle1 q-px-md bg-brown-1 flex justify-between items-center q-py-sm"
			>
				<div>Subyek</div>
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
						@click="crudPenelitian = true"
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
							{{
								formatDate(
									penelitian.created_at,
									'dd MMMM yyyy',
								)
							}}
						</td>
					</tr>
					<tr>
						<td class="label">Peneliti</td>
						<td class="">
							<RouterLink
								:to="`/settings/users/${penelitian.user_id}`"
							>
								{{ penelitian.user_name }}
							</RouterLink>
						</td>
					</tr>
					<tr>
						<td class="label">Jenis Proyek</td>
						<td class="text-weight-medium">
							{{ penelitian?.jenis?.toUpperCase() }}
						</td>
					</tr>
					<tr>
						<td class="label">Judul</td>
						<td class="text-weight-medium">
							{{ penelitian.judul }}
						</td>
					</tr>
					<tr>
						<td class="label">Deskripsi</td>
						<td class="">{{ penelitian.deskripsi }}</td>
					</tr>
					<tr>
						<td class="label">Anggota</td>
						<td class="">{{ penelitian.anggota }}</td>
					</tr>
				</tbody>
			</q-markup-table>
		</q-card-section>
	</q-card>

	<q-dialog v-model="crudPenelitian">
		<CrudPenelitian
			:data="penelitian"
			@success-submit="(r) => (penelitian = r)"
			@success-delete="$router.push('/user/penelitian')"
		/>
	</q-dialog>
	<!-- {{ projectStatus }} -->
</template>
<script setup>
import apiGet from 'src/api/api-get';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import CrudPenelitian from 'src/views/CrudProject.vue';
import { formatDate } from 'src/utils/format-date';

const { params } = useRoute();
const loading = ref(false);
const penelitian = ref({});
const projectStatus = ref({});

const crudPenelitian = ref(false);

async function loadData() {
	const data = await apiGet({
		endPoint: `projects/${params.id}`,
		loading,
	});
	if (data) {
		// console.log('🚀 ~ loadData ~ data:', data);
		penelitian.value = data.project;
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
