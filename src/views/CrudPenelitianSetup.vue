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
					v-model="input.status_proposal"
					url="status-proposal"
					label="Status Proposal"
					class="q-mt-sm"
					clearable
				/>
				<InputSelectArray
					v-model="input.status_laporan"
					url="status-laporan"
					label="Status Laporan"
					class="q-mt-sm"
					clearable
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
				></q-select>
			</q-card-section>

			<FormActions :btn-delete="false" @onDelete="null" />
		</q-form>
	</q-card>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import apiUpdate from 'src/api/api-update';
import FormHeader from 'src/components/FormHeader.vue';
import FormActions from 'src/components/FormActions.vue';
import apiGet from 'src/api/api-get';
import InputSelectArray from 'src/components/InputSelectArray.vue';

const props = defineProps({
	data: Object,
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
		status_proposal: input.value.status_proposal,
		status_laporan: input.value.status_laporan,
		periode: input.value.periode,
		reviewer_user_id: input.value.reviewer_user_id,
	};

	const response = await apiUpdate({
		endPoint: `penelitian/${input.value.id}/setup`,
		data,
		confirm: true,
		notify: true,
		loading: loadingCrud,
	});

	if (response) {
		document.getElementById('btn-close-crud').click();
		emit('successSubmit', response.penelitian);
	}
}
</script>
<style lang=""></style>
