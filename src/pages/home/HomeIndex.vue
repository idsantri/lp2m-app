<template>
	<logo-circle
		:size="150"
		:border="6"
		class="q-mx-auto"
		style="margin-top: 50px"
	/>
	<div class="text-center">
		<div class="text-subtitle1">Selamat Datang</div>
		<p class="q-mt-sm q-mb-none">{{ config.PWA_NAME }}</p>
		<p class="no-margin">
			{{ config.PWA_DESCRIPTION }}
		</p>
	</div>
</template>
<script setup>
import { onMounted } from 'vue';
import LogoCircle from 'components/LogoCircle.vue';
import config from 'src/config';

onMounted(async () => {});
</script>

<style lang="scss" scoped></style>
