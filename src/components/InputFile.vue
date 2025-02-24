<template lang="">
	<q-file
		label="Pilih File"
		dense
		outlined
		accept=".pdf"
		name="file"
		clearable
		:loading="$props.loading"
		:disable="$props.loading"
	>
		<template v-slot:prepend>
			<q-icon name="attach_file" />
		</template>
		<template v-slot:after>
			<q-btn
				dense
				outline
				icon="send"
				class="q-pa-sm"
				color="primary"
				@click="$emit('onUpload')"
			/>
		</template>
	</q-file>
</template>
<script setup>
// const props = defineProps(['loading']);
</script>
<style lang=""></style>
