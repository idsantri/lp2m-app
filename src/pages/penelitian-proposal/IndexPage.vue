<template>
	<q-card>
		<CardHeader>
			Data Proposal
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
			<q-card-section class="q-pa-sm flex justify-start q-gutter-md">
				<div>
					<div class="text-caption text-italic">Judul</div>
					<div>{{ penelitian?.judul }}</div>
				</div>
				<div>
					<div class="text-caption text-italic">File</div>
					<div>
						<a :href="proposal?.file_url">
							{{ proposal?.file?.split('~').pop() }}
						</a>
					</div>
				</div>
				<div>
					<div class="text-caption text-italic">Reviewer</div>
					<div>
						<RouterLink
							:to="`/settings/users/${penelitian?.reviewer_user_id}`"
							>{{ penelitian?.reviewer_user_name }}</RouterLink
						>
					</div>
				</div>
			</q-card-section>
			<q-separator />
			<q-btn
				no-caps
				label="Review"
				icon="edit"
				dense
				class="q-px-sm q-ma-sm"
				outline
				@click="inputReview = !inputReview"
			/>
			<q-card-section v-if="!inputReview" class="q-pa-sm">
				<div>
					<div class="text-caption text-italic">Kesimpulan</div>
					<div class="text-subtitle1">{{ proposal?.kesimpulan }}</div>
				</div>
				<div class="q-mt-sm">
					<div class="text-caption text-italic">Review</div>
					<div v-html="proposal?.review"></div>
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
		</div>
	</q-card>
	<!-- <pre>{{ proposal }}</pre>
	<pre>{{ penelitian }}</pre> -->
</template>
<script setup>
import apiGet from 'src/api/api-get';
import apiUpdate from 'src/api/api-update';
import CardHeader from 'src/components/CardHeader.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const { params } = useRoute();
const loading = ref(false);
const proposal = ref({});
const penelitian = ref({});
const inputReview = ref(false);
const input = ref({});
async function loadData() {
	const data = await apiGet({
		endPoint: `penelitian-proposal/${params.id}`,
		loading,
	});
	// console.log('🚀 ~ loadData ~ data:', data);
	if (data) {
		proposal.value = data.proposal;
		penelitian.value = data.penelitian;
	}
}

onMounted(async () => {
	await loadData();
	Object.assign(input.value, proposal.value);
});

const onSubmit = async () => {
	const data = {
		kesimpulan: input.value.kesimpulan,
		review: input.value.review,
	};
	const response = await apiUpdate({
		endPoint: `penelitian-proposal/${params.id}`,
		data,
		loading,
	});
	if (response) {
		inputReview.value = false;
		await loadData();
	}
};
</script>
