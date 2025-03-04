<template>
	<q-card class="" style="">
		<CardHeader>
			<div class="text-subtitle2 text-weight-bold">ID Santri</div>
			<div class="text-subtitle1">{{ config.PWA_NAME }}</div>
		</CardHeader>

		<q-card-section class="q-pa-sm">
			<div v-for="(item, index) in releases" :key="index" class="q-mb-sm">
				<q-list bordered separator>
					<q-item-label header class="bg-brown-1 q-pa-sm text-italic">
						ver. {{ item.ver }}
						<span class="text-caption"> ({{ item.date }}) </span>
					</q-item-label>

					<q-item v-for="(item, index) in item.release" :key="index">
						<q-item-section>
							<q-item-label> {{ index }} </q-item-label>
							<q-item-label caption>
								<ul
									class="no-margin"
									style="
										padding-inline-start: 16px;
										list-style-type: disc;
									"
								>
									<li v-for="(it, id) in item" :key="id">
										{{ it }}
									</li>
								</ul>
							</q-item-label>
						</q-item-section>
					</q-item>
				</q-list>
			</div>
		</q-card-section>
	</q-card>
</template>
<script setup>
import CardHeader from 'src/components/CardHeader.vue';
import config from 'src/config';

const releases = [
	{
		ver: '1.0.0',
		date: 'Maret 2025',
		release: {
			'New Release': [
				'Autentikasi',
				'User Management',
				'Proyek Penelitian dan Pengabdian',
			],
		},
	},
];
</script>

<style scoped></style>
