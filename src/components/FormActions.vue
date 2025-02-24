<template lang="">
	<q-card-actions class="flex bg-brown-6">
		<q-btn
			v-if="props.btnDelete"
			label="Hapus"
			class="bg-red text-red-1"
			no-caps=""
			@click="$emit('onDelete')"
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
</template>
<script setup>
const props = defineProps({
	btnDelete: Boolean,
});
</script>
<style lang=""></style>
