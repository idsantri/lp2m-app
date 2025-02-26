<template lang="">
	<div class="bg-brown-11 q-pa-sm flex items-center justify-between">
		<div class="text-subtitle1 q-ml-sm">Riwayat Laporan</div>
		<q-btn
			no-caps
			label="Tambah"
			icon="add"
			dense
			class="q-px-md q-mr-sm"
			outline
			@click="onAdd"
		/>
	</div>
	<q-list bordered v-if="localData?.length > 0" separator>
		<q-item v-for="(item, index) in localData" :key="index" separator>
			<q-item-section>
				<q-item-label caption>
					{{ formatDate(item.created_at, 'dd MMMM yyyy') }}
				</q-item-label>
				<q-item-label>{{ item.status }}</q-item-label>
				<q-item-label caption class="text-italic">
					{{ item.keterangan }}
				</q-item-label>
			</q-item-section>
			<q-item-section avatar>
				<q-btn icon="edit" outline glossy round @click="onEdit(item)" />
			</q-item-section>
		</q-item>
	</q-list>
	<q-card v-else class="text-negative text-center q-pa-lg">
		Belum ada riwayat
	</q-card>
	<q-dialog v-model="crud">
		<CrudLaporan
			:data="crudData"
			@success-add="(res) => localData.push(res)"
			@success-edit="
				(res) => (localData = replaceObjectById(localData, res.id, res))
			"
			@success-delete="
				(id) => (localData = deleteObjectById(localData, id))
			"
		/>
	</q-dialog>
</template>
<script setup>
import { formatDate } from 'src/utils/format-date';
import CrudLaporan from 'src/views/CrudPenelitianLaporan.vue';
import { ref } from 'vue';
import { replaceObjectById, deleteObjectById } from 'src/utils/array-object';

const props = defineProps({
	laporan: { type: Object, required: true },
});
const localData = ref(props.laporan);
const crudData = ref({});
const crud = ref(false);

const onAdd = () => {
	crudData.value = {};
	crud.value = true;
};
const onEdit = (i) => {
	crudData.value = i;
	crud.value = true;
};
</script>
<style lang=""></style>
