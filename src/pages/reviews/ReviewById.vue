<template>
	<q-card>
		<CardHeader>
			Review Proyek
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
				<q-card flat bordered="">
					<q-card-section class="q-pa-sm bg-brown-1 text-subtitle1">
						Subyek
					</q-card-section>
					<q-card-section
						class="q-pa-sm flex items-start justify-start q-gutter-x-lg"
					>
						<ContentLabel label="Judul">
							{{ project?.judul }}
						</ContentLabel>
						<ContentLabel label="File">
							<a :href="review?.file_url">
								{{ review?.file?.split('~').pop() }}
							</a>
						</ContentLabel>
						<ContentLabel label="Tipe">
							{{ review?.type?.toUpperCase() }}
						</ContentLabel>
						<ContentLabel label="Reviewer">
							<RouterLink
								:to="`/settings/users/${project?.reviewer_user_id}`"
								>{{ project?.reviewer_user_name }}</RouterLink
							>
						</ContentLabel>
					</q-card-section>
				</q-card>
			</q-card-section>

			<!-- PLAGIAT -->
			<q-card-section class="q-pa-sm">
				<q-card flat bordered="">
					<q-card-section class="q-pa-sm bg-brown-1 flex">
						<div class="text-subtitle1">Plagiarisme</div>
						<q-space />
						<q-btn
							class="q-px-sm"
							icon="edit"
							label="Edit"
							outline=""
							dense
							no-caps=""
							@click="inputPlagiat = !inputPlagiat"
						/>
					</q-card-section>
					<q-card-section
						v-if="!inputPlagiat"
						class="q-pa-sm flex items-start justify-start q-gutter-x-lg"
					>
						<ContentLabel label="Persentase">
							{{ review?.plagiat_percentage }}%
						</ContentLabel>
						<ContentLabel label="File">
							<a :href="review.plagiat_file_url">
								{{ review.plagiat_file?.split('~').pop() }}
							</a>
						</ContentLabel>
					</q-card-section>
					<q-card-section v-else class="q-pa-sm">
						<q-form
							class="flex items-center justify-start q-gutter-x-lg"
							@submit.prevent="submitPlagiat"
						>
							<q-input
								class="q-my-xs"
								dense
								type="number"
								outlined
								label="Persentase"
								suffix="%"
								name="plagiat_percentage"
								v-model="plagiat.plagiat_percentage"
							/>
							<q-file
								class="q-my-xs"
								dense
								outlined
								label="Pilih File"
								clearable=""
								accept=".pdf"
								name="plagiat_file"
								v-model="plagiat.plagiat_file"
							>
								<template v-slot:prepend>
									<q-icon name="attach_file" />
								</template>
							</q-file>
							<q-btn
								outline=""
								glossy=""
								class="q-my-xs"
								type="submit"
								label="Simpan"
								icon="save"
								no-caps=""
							/>
						</q-form>
					</q-card-section>
				</q-card>
			</q-card-section>

			<!-- REVIEW -->
			<q-card-section class="q-pa-sm">
				<q-card bordered="" flat>
					<q-card-section class="q-pa-sm bg-brown-1 flex">
						<div class="text-subtitle1">Review</div>
						<q-space />
						<q-btn
							no-caps
							label="Review"
							icon="edit"
							dense
							class="q-px-sm"
							outline
							@click="inputReview = !inputReview"
						/>
					</q-card-section>

					<q-card-section v-if="!inputReview" class="q-pa-sm">
						<div>
							<div class="text-caption text-italic">
								Kesimpulan
							</div>
							<div class="text-subtitle1">
								{{ review?.kesimpulan }}
							</div>
						</div>
						<div class="q-mt-sm">
							<div class="text-caption text-italic">Review</div>
							<div v-html="review?.review"></div>
						</div>
					</q-card-section>
					<q-card-section v-else class="q-pa-sm">
						<q-form @submit.prevent="onSubmit">
							<q-input
								class="q-mt-sm"
								dense
								outlined
								label="Kesimpulan"
								v-model="input.kesimpulan"
							/>
							<q-editor class="q-mt-sm" v-model="input.review" />
							<q-btn
								color="brown-8"
								type="submit"
								label="Simpan"
								class="q-mt-sm"
								no-caps=""
							/>
						</q-form>
					</q-card-section>
				</q-card>
			</q-card-section>
		</div>
	</q-card>
	<!-- <pre>{{ review }}</pre>
	<pre>{{ project }}</pre> -->
</template>
<script setup>
import apiGet from 'src/api/api-get';
import apiUpdate from 'src/api/api-update';
import CardHeader from 'src/components/CardHeader.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import ContentLabel from 'src/components/ContentLabel.vue';
import apiPost from 'src/api/api-post';

const { params } = useRoute();
const loading = ref(false);
const review = ref({});
const project = ref({});
const inputReview = ref(false);
const input = ref({});
const inputPlagiat = ref(false);
const plagiat = ref({});

async function loadData() {
	const data = await apiGet({
		endPoint: `reviews/${params.id}`,
		loading,
	});
	// console.log('🚀 ~ loadData ~ data:', data);
	if (data) {
		// console.log('🚀 ~ loadData ~ data:', data);
		review.value = data.review;
		project.value = data.project;
	}
}

onMounted(async () => {
	await loadData();
	Object.assign(input.value, review.value);
});

const onSubmit = async () => {
	const data = {
		kesimpulan: input.value.kesimpulan,
		review: input.value.review,
	};
	const response = await apiUpdate({
		endPoint: `reviews/${params.id}`,
		data,
		loading,
	});
	// console.log('🚀 ~ loadData ~ data:', data);
	if (response) {
		inputReview.value = false;
		await loadData();
	}
};

const submitPlagiat = async (e) => {
	const formData = new FormData(e.target);
	const formObject = Object.fromEntries(formData.entries());
	const response = await apiPost({
		endPoint: `reviews/${params.id}/plagiat`,
		data: formObject,
		loading,
		config: {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		},
	});
	if (response) {
		inputPlagiat.value = false;
		await loadData();
	}
};
</script>
