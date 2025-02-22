<template lang="">
	<q-card class="full-width" style="max-width: 425px">
		<q-form @submit.prevent="onSubmit">
			<FormHeader title="Update Username" :is-new="false" />
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
					label="Username"
					v-model="input.username"
					hint="Anda bisa login dengan username atau email"
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
		username: input.value.username,
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
});
</script>
<style lang=""></style>
