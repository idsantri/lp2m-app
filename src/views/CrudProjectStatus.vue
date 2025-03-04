<template lang="">
	<q-card class="full-width" style="max-width: 425px">
		<q-form @submit.prevent="onSubmit">
			<FormHeader title="Setup Penelitian" :is-new="false" />
			<q-card-section>
				<div v-if="loadingCrud">
					<q-dialog v-model="loadingCrud" persistent="">
						<q-spinner-cube
							color="brown-12"
							size="8em"
							class="flex q-ma-lg q-mx-auto"
						/>
					</q-dialog>
				</div>
				<InputSelectArray
					v-model="input.periode"
					url="periode"
					label="Periode"
					class="q-mt-sm"
				/>
				<InputSelectArray
					v-model="input.proposal_status"
					url="status-proposal"
					label="Status Proposal"
					class="q-mt-sm"
					clearable
				/>
				<q-input
					class="q-mt-sm"
					dense
					outlined
					label="Keterangan Proposal"
					v-model="input.proposal_keterangan"
					autogrow
					hint="Keterangan tambahan untuk proposal"
				/>
				<InputSelectArray
					v-model="input.laporan_status"
					url="status-laporan"
					label="Status Laporan"
					class="q-mt-sm"
					clearable
				/>
				<q-input
					class="q-mt-sm"
					dense
					outlined
					label="Keterangan Laporan"
					v-model="input.laporan_keterangan"
					autogrow
					hint="Keterangan tambahan untuk laporan"
				/>
				<q-select
					dense
					outlined
					emit-value
					map-options
					option-value="id"
					option-label="name"
					:options="users"
					:loading="loading"
					behavior="menu"
					clearable
					v-model="input.reviewer_user_id"
					label="Reviewer"
					class="q-mt-sm"
					:rules="[(val) => !!val || 'Harus diisi!']"
				/>
			</q-card-section>

			<FormActions :btn-delete="false" @onDelete="null" />
		</q-form>
	</q-card>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import FormHeader from 'src/components/FormHeader.vue';
import FormActions from 'src/components/FormActions.vue';
import apiGet from 'src/api/api-get';
import InputSelectArray from 'src/components/InputSelectArray.vue';
import apiPost from 'src/api/api-post';

const props = defineProps({
	data: Object,
	projectId: { type: Number, required: true },
});
const emit = defineEmits(['successSubmit', 'successDelete']);
const input = ref({});
const loadingCrud = ref(false);
const loading = ref(false);
const users = ref([]);

onMounted(async () => {
	Object.assign(input.value, props.data);
	const data = await apiGet({
		endPoint: 'users?role=reviewer',
		loading: loading,
	});
	if (data) {
		users.value = data.users;
	}
});

async function onSubmit() {
	const data = {
		project_id: props.projectId,
		proposal_status: input.value.proposal_status,
		proposal_keterangan: input.value.proposal_keterangan,
		laporan_status: input.value.laporan_status,
		laporan_keterangan: input.value.laporan_keterangan,
		periode: input.value.periode,
		reviewer_user_id: input.value.reviewer_user_id,
	};

	const response = await apiPost({
		endPoint: 'projects-status',
		data,
		confirm: true,
		notify: true,
		loading: loadingCrud,
	});

	if (response) {
		document.getElementById('btn-close-crud').click();
		emit('successSubmit', response.project_status);
	}
}
</script>
<style lang=""></style>
