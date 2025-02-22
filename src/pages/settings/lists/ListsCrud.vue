<template lang="">
	<q-card class="full-width" style="max-width: 425px">
		<q-form @submit.prevent="onSubmit">
			<FormHeader
				:title="kebabToTitleCase(input.key || 'list')"
				:is-new="input.id ? false : true"
			/>

			<q-card-section class="q-pa-sm">
				<q-input
					label="text1"
					dense
					class=""
					outlined
					v-model="input.val0"
					autogrow=""
					:loading="loadingCrud"
					v-if="props.showInput.val0"
				/>
				<q-input
					label="text2"
					dense
					class="q-mt-sm"
					outlined
					v-model="input.val1"
					autogrow=""
					:loading="loadingCrud"
					v-if="props.showInput.val1"
				/>
				<q-input
					label="text3"
					dense
					class="q-mt-sm"
					outlined
					v-model="input.val2"
					autogrow=""
					:loading="loadingCrud"
					v-if="props.showInput.val2"
				/>
			</q-card-section>

			<q-card-actions class="flex bg-brown-6">
				<q-btn
					v-show="input.id"
					label="Hapus"
					class="bg-red text-red-1"
					no-caps=""
					@click="onDelete"
					:disable="loadingCrud"
				/>
				<q-space />
				<q-btn
					label="Tutup"
					v-close-popup
					class="bg-brown-11"
					no-caps=""
					id="btn-close-crud"
					:disable="loadingCrud"
				/>
				<q-btn
					type="submit"
					label="Simpan"
					class="bg-brown-10 text-brown-11"
					no-caps=""
					:disable="loadingCrud"
				/>
			</q-card-actions>
		</q-form>
	</q-card>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import apiDelete from 'src/api/api-delete';
import apiPost from 'src/api/api-post';
import apiUpdate from 'src/api/api-update';
import { kebabToTitleCase } from 'src/utils/format-text';
import FormHeader from 'src/components/FormHeader.vue';

const props = defineProps({
	dataInput: {
		type: Object,
		required: true,
	},
	showInput: {
		type: Object,
		required: true,
	},
});
const emit = defineEmits(['successSubmit', 'successDelete']);

const loadingCrud = ref(false);
const input = ref({});

onMounted(() => {
	Object.assign(input.value, props.dataInput);
	// console.log(input.value);
	// console.log(props.showInput);
});

async function onSubmit() {
	const data = JSON.parse(JSON.stringify(input.value));
	// console.log(data);
	if (data.id) {
		delete data.id;
		// console.log(data);
		// return;
		const upt = await apiUpdate({
			endPoint: `lists/${input.value.id}`,
			loading: loadingCrud,
			data,
		});
		if (upt) {
			document.getElementById('btn-close-crud').click();
			emit('successSubmit', upt);
		}
	} else {
		// console.log(data);
		// return;
		const post = await apiPost({
			endPoint: 'lists',
			loading: loadingCrud,
			data,
		});
		if (post) {
			document.getElementById('btn-close-crud').click();
			emit('successSubmit', post);
		}
	}
}

async function onDelete() {
	if (!input.value.id) return;

	const del = await apiDelete({
		endPoint: `lists/${input.value.id}`,
		loading: loadingCrud,
	});
	if (del) {
		document.getElementById('btn-close-crud').click();
		emit('successDelete');
	}
}
</script>
<style lang=""></style>
