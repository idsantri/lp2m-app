<template lang="">
	<q-card class="" style="">
		<CardHeader> Tentang Kami</CardHeader>
		<q-card-section class="q-pa-sm">
			<h1 class="text-h6">{{ config.PWA_DESCRIPTION }}</h1>
			<p class="">{{ config.PWA_INS }}</p>
			<q-separator />
			<p class="text-overline">Alamat:</p>
			<ul>
				<li>Jl.Raya Martajesah Kelurahan Martajesah Bangkalan</li>
				<li>085856528798</li>
				<li>lp2mstaisbangkalan@gmail.com</li>
			</ul>
		</q-card-section>
	</q-card>
</template>
<script setup>
import CardHeader from 'src/components/CardHeader.vue';
import config from 'src/config';
</script>
<style lang=""></style>
