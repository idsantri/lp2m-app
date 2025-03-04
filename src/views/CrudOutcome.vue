<template lang="">
	<q-card class="full-width" style="max-width: 425px">
		<q-form @submit.prevent="onSubmit">
			<FormHeader
				title="Input Outcome"
				:is-new="data.id ? false : true"
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
				<q-select
					name="type"
					outlined
					dense
					v-model="input.type"
					label="Tipe"
					class="q-mt-sm"
					:options="options"
					clearable
					:rules="[(val) => !!val || 'Harus diisi!']"
					new-value-mode="add-unique"
					@new-value="
						(val, done) => {
							done(val);
							options.push(val);
							input.type = val;
						}
					"
					use-input
					behavior="menu"
				/>
				<q-input
					class="q-mt-sm"
					dense
					outlined
					label="Judul"
					v-model="input.judul"
				/>
				<q-input
					type="date"
					class="q-mt-sm"
					dense
					outlined
					label="Tanggal Publikasi"
					v-model="input.published_at"
				/>
				<q-input
					class="q-mt-sm"
					dense
					outlined
					label="Penerbit"
					v-model="input.publisher"
				/>
				<q-file
					:multiple="false"
					accept="application/pdf"
					clearable
					class="q-mt-sm"
					dense
					outlined
					label="File"
					v-model="input.file"
				>
					<template v-slot:prepend>
						<q-icon name="attach_file" />
					</template>
				</q-file>
				<q-input
					type="url"
					class="q-mt-sm"
					dense
					outlined
					label="Url"
					v-model="input.url"
				/>
			</q-card-section>

			<FormActions
				:btn-delete="data.id ? true : false"
				@onDelete="null"
			/>
		</q-form>
	</q-card>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import FormHeader from 'src/components/FormHeader.vue';
import FormActions from 'src/components/FormActions.vue';
import apiPost from 'src/api/api-post';
import { refToFormData } from 'src/utils/form';

const props = defineProps({
	data: Object,
	projectId: { type: Number, required: true },
});

const emit = defineEmits(['successSubmit', 'successDelete']);
const input = ref({});
const loadingCrud = ref(false);
const options = ref(['Buku', 'Jurnal']);

onMounted(async () => {
	Object.assign(input.value, props.data);
});

async function onSubmit(e) {
	const form = refToFormData(e.target, input);
	form.append('project_id', props.projectId);

	const response = await apiPost({
		endPoint: 'outcomes',
		data: form,
		notify: true,
		loading: loadingCrud,
		config: {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		},
	});

	if (response) {
		document.getElementById('btn-close-crud').click();
		emit('successSubmit', response.outcome);
	}
}
</script>
<style lang=""></style>
