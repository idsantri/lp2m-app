<template lang="">
	<div class="q-my-sm">
		<div class="text-caption text-italic">{{ label }}</div>
		<div>
			<slot>Content</slot>
		</div>
	</div>
	<q-separator v-if="separator" class="q-my-sm" />
</template>
<script setup>
defineProps({
	label: String,
	separator: {
		type: Boolean,
		default: false,
	},
});
</script>
<style lang=""></style>
