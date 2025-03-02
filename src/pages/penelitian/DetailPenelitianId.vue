<template lang="">
	<q-card class="">
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
				<div
					class="text-subtitle1 q-px-md bg-brown-1 flex justify-between items-center q-py-sm"
				>
					<div></div>
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
				<q-markup-table flat wrap-cells>
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
				<q-separator class="q-my-md" />
				<div
					class="text-subtitle1 q-px-md bg-brown-1 flex justify-between items-center q-py-sm"
				>
					<div></div>
					<q-btn
						label="Atur"
						no-caps
						icon="tune"
						dense
						class="q-px-sm"
						outline
						@click="crudPenelitianSetup = true"
					/>
				</div>
				<q-markup-table flat wrap-cells>
					<tbody>
						<tr>
							<td class="label">Periode</td>
							<td class="">{{ penelitian.periode }}</td>
						</tr>
						<tr>
							<td class="label">Status Proposal</td>
							<td class="">{{ penelitian.status_proposal }}</td>
						</tr>
						<tr>
							<td class="label">Status Laporan</td>
							<td class="">{{ penelitian.status_laporan }}</td>
						</tr>
						<tr>
							<td class="label">Reviewer</td>
							<td class="">
								<RouterLink
									:to="`/settings/users/${penelitian.reviewer_user_id}`"
								>
									{{ penelitian.reviewer_user_name }}
								</RouterLink>
							</td>
						</tr>
					</tbody>
				</q-markup-table>
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
	<q-dialog v-model="crudPenelitianSetup">
		<CrudPenelitianSetup
			:data="penelitian"
			@success-submit="(r) => (penelitian = r)"
			@success-delete="null"
		/>
	</q-dialog>
</template>
<script setup>
import apiGet from 'src/api/api-get';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import CardHeader from 'src/components/CardHeader.vue';
import CrudPenelitian from 'src/views/CrudPenelitian.vue';
import { formatDate } from 'src/utils/format-date';
import CrudPenelitianSetup from 'src/views/CrudPenelitianSetup.vue';

const { params } = useRoute();
const loading = ref(false);
const penelitian = ref({});
const crudPenelitian = ref(false);
const crudPenelitianSetup = ref(false);

async function loadData() {
	const data = await apiGet({
		endPoint: `penelitian/${params.id}`,
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
<style lang="scss" scoped>
.label {
	width: 140px;
}
</style>
