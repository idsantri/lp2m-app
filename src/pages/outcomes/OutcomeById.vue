<template lang="">
	<q-card>
		<CardHeader>
			Outcome Proyek
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
		<div v-if="loading" class="q-pa-sm">
			<q-spinner-cube
				color="brown-12"
				size="8em"
				class="flex q-ma-lg q-mx-auto"
			/>
		</div>
		<div v-else>
			<q-card-section class="q-pa-sm">
				<q-card bordered flat>
					<q-card-section class="q-px-sm q-py-none">
						<div class="wrap" style="display: flex; gap: 10px 20px">
							<ContentLabel label="Jenis Proyek">
								{{ project.jenis }}
							</ContentLabel>
							<ContentLabel label="Judul">
								{{ project.judul }}
							</ContentLabel>
							<ContentLabel label="Peneliti">
								<RouterLink
									:to="'/settings/users/' + project.user_id"
								>
									{{ project.user_name }}
								</RouterLink>
							</ContentLabel>
							<ContentLabel label="Anggota">
								{{ project.anggota }}
							</ContentLabel>
						</div>
					</q-card-section>
				</q-card>
			</q-card-section>
			<q-card-section class="q-pa-sm">
				<q-card class="" flat bordered>
					<q-card-section class="q-pa-sm bg-brown-1">
						<div class="text-subtitle1">Outcome</div>
					</q-card-section>
					<q-card-section class="q-pa-sm">
						<ContentLabel label="Tipe" separator>
							{{ outcome.type }}
						</ContentLabel>
						<ContentLabel label="Judul" separator>
							{{ outcome.judul }}
						</ContentLabel>
						<ContentLabel label="File" separator>
							<a :href="outcome?.file_url">
								{{ outcome?.file?.split('~').pop() || '-' }}
							</a>
						</ContentLabel>
						<ContentLabel label="Url" separator>
							<a :href="outcome?.url">{{
								outcome?.url || '-'
							}}</a>
						</ContentLabel>
						<ContentLabel label="Penerbit" separator>
							{{ outcome.publisher }}
						</ContentLabel>
						<ContentLabel label="Tanggal Terbit" separator>
							{{ outcome.published_at }}
						</ContentLabel>
					</q-card-section>
				</q-card>
			</q-card-section>
			<q-card-section>
				<q-btn
					icon="delete"
					label="Hapus"
					no-caps
					color="negative"
					@click="doDelete"
				/>
			</q-card-section>
		</div>
	</q-card>

	<!-- <pre>
        {{ project }}
    </pre>
	<hr /> -->
	<!-- <pre>
        {{ outcome }}
    </pre> -->
</template>
<script setup>
import apiGet from 'src/api/api-get';
import CardHeader from 'src/components/CardHeader.vue';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ContentLabel from 'src/components/ContentLabel.vue';
import apiDelete from 'src/api/api-delete';

const { params } = useRoute();
const router = useRouter();
const outcome = ref({});
const project = ref({});
const loading = ref(false);

async function loadData() {
	const data = await apiGet({
		endPoint: 'outcomes/' + params.id,
		loading,
	});
	if (data) {
		outcome.value = data.outcome;
		project.value = data.project;
	}
}

onMounted(async () => {
	await loadData();
});

async function doDelete() {
	const response = await apiDelete({
		endPoint: 'outcomes/' + params.id,
		loading,
	});
	if (response) {
		router.go(-1);
	}
}
</script>
<style lang=""></style>
