<template lang="">
	<q-card class="full-width" style="max-width: 425px">
		<q-form @submit.prevent="onSubmit">
			<FormHeader
				:title="`Input Proyek ${input?.jenis?.toUpperCase()}`"
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
				<!-- <q-select
					class="q-mt-sm"
					dense
					outlined
					label="Jenis Proyek"
					v-model="input.jenis"
					:options="['Penelitian', 'Pengabdian']"
					:rules="[(val) => !!val || 'Harus diisi!']"
					behavior="menu"
					readonly
				/> -->
				<input type="hidden" v-model="input.jenis" />
				<q-input
					class="q-mt-sm"
					dense
					outlined
					label="Judul"
					v-model="input.judul"
					hint="Tidak boleh sama dengan judul yang sudah ada"
					:rules="[(val) => !!val || 'Harus diisi!']"
				/>
				<q-input
					class="q-mt-sm"
					dense
					outlined
					label="Anggota"
					v-model="input.anggota"
					hint="Selain Anda sendiri jika ada. Jika lebih dari 1 maka pisahkan dengan titik koma (;)"
				/>
			</q-card-section>

			<FormActions
				:btn-delete="props.data.id ? true : false"
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

const props = defineProps({
	data: Object,
});
const emit = defineEmits(['successSubmit', 'successDelete']);

const input = ref({});
const loadingCrud = ref(false);
async function onSubmit() {
	const data = {
		jenis: input.value.jenis,
		judul: input.value.judul,
		anggota: input.value.anggota,
	};
	// const data = refToFormData(e.target, input);
	// console.log('🚀 ~ onSubmit ~ data:', [...data]);
	// return;
	let response = null;
	if (input.value.id) {
		response = await apiUpdate({
			endPoint: `projects/${input.value.id}`,
			data,
			confirm: true,
			notify: true,
			loading: loadingCrud,
		});
	} else {
		response = await apiPost({
			endPoint: 'projects',
			data,
			notify: true,
			loading: loadingCrud,
		});
	}

	if (response) {
		document.getElementById('btn-close-crud').click();
		emit('successSubmit', response.project);
	}
}
const handleDelete = async () => {
	const result = await apiDelete({
		endPoint: `projects/${input.value.id}`,
		loading: loadingCrud,
	});
	if (result) {
		emit('successDelete');
	}
};
onMounted(async () => {
	Object.assign(input.value, props.data);
});
</script>
<style lang=""></style>
