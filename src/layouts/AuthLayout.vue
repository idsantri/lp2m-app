<template>
	<q-layout>
		<q-page-container>
			<q-page class="flex flex-center">
				<q-card class="my-card q-pa-lg bg-brown-5 text-brown-1">
					<q-card-section class="no-padding q-mb-md">
						<info-pwa />

						<logo-circle
							:size="100"
							:border="3"
							class="q-mx-auto"
						/>

						<div class="container-title">
							<h1 class="title text-brown-10">
								{{ config.PWA_SHORT_NAME }}
							</h1>
							<p class="sub1">{{ config.PWA_INS }}</p>
						</div>
						<q-separator dark />
						<h3 class="sub-title">{{ title }}</h3>
					</q-card-section>

					<q-banner
						v-if="errors.length > 0"
						id="error"
						class="q-mb-sm no-padding bg-red-2 text-red"
					>
						<ul class="q-my-xs">
							<li v-for="(error, index) in errors" :key="index">
								<span v-html="error"></span>
							</li>
						</ul>
					</q-banner>

					<q-card-section class="no-padding no-margin">
						<router-view
							@title="handleTitle"
							@errors="handleErrors"
							:credential="credential"
						/>
					</q-card-section>
				</q-card>
			</q-page>
		</q-page-container>
	</q-layout>
</template>

<script setup>
import { ref } from 'vue';
import config from 'src/config';
import LogoCircle from 'components/LogoCircle.vue';
import InfoPwa from './comp/InfoPwa.vue';

const title = ref('Autentikasi');
const handleTitle = (value) => (title.value = value);
const errors = ref([]);
const handleErrors = (value) => (errors.value = value);
const credential = ref({});
</script>

<style scoped>
.title {
	font-size: 2em;
	margin: 0 auto;
	padding: 0;
	text-align: center;
	height: 35px;
	line-height: 35px;
	letter-spacing: 1px;
}
.sub1 {
	text-align: center;
	font-size: 0.9rem;
	margin: 0;
	font-weight: 300;
	letter-spacing: 2px;
}
.sub2 {
	text-align: center;
	font-size: 1.1rem;
	margin: 0;
	font-weight: 300;
}
.sub-title {
	font-size: 1.7em;
	margin: 0 auto;
	padding: 0;
	font-weight: 500;
	text-align: center;
	height: 30px;
	line-height: 30px;
	margin-top: 10px;
}

.my-card {
	width: 400px;
	max-width: 95vw;
}

.container-title {
	margin-top: 10px;
	margin-bottom: 10px;
}
</style>
