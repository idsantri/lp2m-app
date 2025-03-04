<template lang="">
	<q-card class="full-width" style="max-width: 425px">
		<q-form @submit.prevent="onSubmit">
			<FormHeader
				title="Input Riwayat Proposal"
				:is-new="props?.data?.id ? false : true"
			/>
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
					v-model="input.status"
					url="status-review"
					label="Status"
					class="q-mt-sm"
					:rules="[(val) => !!val || 'Harus diisi!']"
					:btn-setting="false"
				/>
				<q-input
					class="q-mt-lg"
					dense
					outlined
					label="Keterangan"
					v-model="input.keterangan"
					type="textarea"
				/>
			</q-card-section>

			<FormActions
				:btn-delete="props?.data?.id ? true : false"
				@onDelete="handleDelete"
			/>
		</q-form>
	</q-card>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import apiUpdate from 'src/api/api-update';
import FormHeader from 'src/components/FormHeader.vue';
import FormActions from 'src/components/FormActions.vue';
import apiPost from 'src/api/api-post';
import apiDelete from 'src/api/api-delete';
import InputSelectArray from 'src/components/InputSelectArray.vue';
import { useRoute } from 'vue-router';

const props = defineProps({
	data: Object,
});
const emit = defineEmits([
	'successAdd',
	'successEdit',
	'successSubmit',
	'successDelete',
]);
const { params } = useRoute();

const input = ref({});
const loadingCrud = ref(false);
async function onSubmit() {
	const data = {
		penelitian_id: params.id,
		status: input.value.status,
		keterangan: input.value.keterangan,
	};

	let response = null;
	if (input.value.id) {
		response = await apiUpdate({
			endPoint: `penelitian/proposal/${input.value.id}`,
			data,
			confirm: true,
			notify: true,
			loading: loadingCrud,
		});
		if (response) {
			document.getElementById('btn-close-crud').click();
			emit('successEdit', response.proposal);
			emit('successSubmit', response.proposal);
		}
	} else {
		response = await apiPost({
			endPoint: 'penelitian/proposal',
			data,
			notify: true,
			loading: loadingCrud,
		});
		if (response) {
			document.getElementById('btn-close-crud').click();
			emit('successAdd', response.proposal);
			emit('successSubmit', response.proposal);
		}
	}
}
const handleDelete = async () => {
	const result = await apiDelete({
		endPoint: `penelitian/proposal/${input.value.id}`,
		loading: loadingCrud,
	});
	if (result) {
		document.getElementById('btn-close-crud').click();
		emit('successDelete', input.value.id);
	}
};
onMounted(async () => {
	Object.assign(input.value, props.data);
});
</script>
<style lang=""></style>
