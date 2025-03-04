<template lang="">
	<q-card class="" flat bordered>
		<q-card-section class="q-pa-sm">
			<div
				class="text-subtitle1 q-px-md bg-brown-1 flex justify-between items-center q-py-sm"
			>
				<div>Outcome</div>
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
						label="Tambah"
						no-caps
						icon="add"
						dense
						class="q-px-sm"
						outline
						@click="showCrud = true"
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
			<div v-else>
				<div
					v-if="outcomes.length == 0"
					class="text-center q-pa-lg text-negative"
				>
					Tidak ada data untuk ditampilkan!
				</div>
				<q-list v-else separator bordered>
					<q-item v-for="item in outcomes" :key="item.id">
						<q-item-section>
							<q-item-label overline>
								{{ item.type }}
							</q-item-label>
							<q-item-label>{{ item.judul }}</q-item-label>
							<q-item-label caption>
								{{
									formatDate(
										item?.published_at,
										'dd MMMM yyyy',
									)
								}}
							</q-item-label>
						</q-item-section>
						<q-item-section avatar>
							<q-btn
								icon="info"
								round
								outline
								glossy
								:to="`/outcomes/${item.id}`"
							/>
						</q-item-section>
					</q-item>
				</q-list>
			</div>
			<!-- <pre>{{ outcomes }}</pre> -->
		</q-card-section>
	</q-card>

	<q-dialog v-model="showCrud">
		<CrudOutcome
			:data="{}"
			:project-id="Number(params.id)"
			@success-submit="(r) => $router.push('/outcomes/' + r.id)"
			@success-delete="null"
		/>
	</q-dialog>
</template>
<script setup>
import apiGet from 'src/api/api-get';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { formatDate } from 'src/utils/format-date';
import CrudOutcome from 'src/views/CrudOutcome.vue';

const { params } = useRoute();
const loading = ref(false);
const outcomes = ref([]);

const showCrud = ref(false);

async function loadData() {
	const data = await apiGet({
		endPoint: 'outcomes',
		params: { project_id: params.id },
		loading,
		notify: false,
	});
	if (data) {
		outcomes.value = data.outcomes;
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
