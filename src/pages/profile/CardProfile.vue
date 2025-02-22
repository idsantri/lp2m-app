<template lang="">
	<q-card class="full-width" style="max-width: 425px">
		<q-form @submit.prevent="onSubmit">
			<FormHeader title="Update Profil" :is-new="false" />
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
				<q-input
					class="q-mt-sm"
					dense
					outlined
					label="Awalan"
					v-model="input.prefix"
					hint="Gelar akademis"
				/>
				<q-input
					class="q-mt-sm"
					dense
					outlined
					label="Nama Lengkap"
					v-model="input.name"
					hint=""
				/>
				<q-input
					class="q-mt-sm"
					dense
					outlined
					label="Akhiran"
					v-model="input.suffix"
					hint="Gelar akademis"
				/>
				<q-input
					class="q-mt-sm"
					dense
					outlined
					label="NIDN"
					v-model="input.nidn"
					hint="Nomor Induk Dosen Nasional"
				/>
				<q-input
					class="q-mt-sm"
					dense
					outlined
					label="Prodi"
					v-model="input.prodi"
					hint=""
				/>
				<q-input
					class="q-mt-sm"
					dense
					outlined
					label="Nomor Telepon"
					v-model="input.phone"
					hint="08123456789"
				/>
			</q-card-section>
			<q-card-actions class="flex bg-brown-6">
				<q-btn
					v-show="false"
					label="Hapus"
					class="bg-red text-red-1"
					no-caps=""
				/>
				<q-space />
				<q-btn
					label="Tutup"
					v-close-popup
					class="bg-brown-11"
					no-caps=""
					id="btn-close-crud"
				/>
				<q-btn
					type="submit"
					label="Simpan"
					class="bg-brown-10 text-brown-11"
					no-caps=""
				/>
			</q-card-actions>
		</q-form>
	</q-card>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import apiUpdate from 'src/api/api-update';
import FormHeader from 'src/components/FormHeader.vue';

const props = defineProps({
	isNew: Boolean,
	data: Object,
});
const emit = defineEmits(['successSubmit', 'successDelete']);

const input = ref({});
const loadingCrud = ref(false);
async function onSubmit() {
	const data = {
		prefix: input.value.prefix,
		name: input.value.name,
		suffix: input.value.suffix,
		nidn: input.value.nidn,
		prodi: input.value.prodi,
		phone: input.value.phone,
	};

	const response = await apiUpdate({
		endPoint: 'user',
		data,
		confirm: true,
		notify: true,
		loading: loadingCrud,
	});

	if (response) {
		document.getElementById('btn-close-crud').click();
		emit('successSubmit', response);
	}
}

onMounted(async () => {
	Object.assign(input.value, props.data);
	// console.log(input.value);
});
</script>
<style lang=""></style>
