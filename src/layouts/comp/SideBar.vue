<template>
	<q-list class="text-brown-1">
		<q-item class="" to="/">
			<q-item-section class="q-py-md">
				<QItemLabel>
					<LogoCircle style="margin: auto" :size="75" :border="2" />
				</QItemLabel>
				<QItemLabel class="q-mx-auto q-pt-md text-brown-11">
					<div class="text-center text-weight-bold">
						{{ config.PWA_NAME }}
					</div>
					<div class="text-center text-weight-light">
						{{ config.PWA_DESCRIPTION }}
					</div>
				</QItemLabel>
				<div v-if="getIsLogin">
					<QSeparator dark class="q-my-md" />
					<QItemLabel class="text-center text-body1">
						{{ getUser.fullName }}
					</QItemLabel>
					<QItemLabel class="text-center text-weight-light">
						{{ getUser.email }}
					</QItemLabel>
				</div>
			</q-item-section>
		</q-item>
		<q-separator dark />

		<!-- HOME -->
		<q-item class="" to="/home">
			<q-item-section>
				<q-item-label class="text-brown-11 text-subtitle1">
					Home
				</q-item-label>
			</q-item-section>
		</q-item>

		<!-- DASHBOARD -->
		<ExpansionItem label="Dashboard" :separator="true">
			<MenuItem v-for="item in menuUser" :key="item.to" :item="item" />
		</ExpansionItem>

		<!-- PROJECT -->

		<ExpansionItem label="Proyek">
			<MenuItem
				v-for="item in menuProjects"
				:key="item.to"
				:item="item"
			/>
		</ExpansionItem>

		<!-- SETTING -->
		<ExpansionItem label="Pengaturan">
			<MenuItem v-for="item in menuSetting" :key="item.to" :item="item" />
		</ExpansionItem>

		<!-- INFO -->
		<ExpansionItem label="Info">
			<MenuItem v-for="item in menuInfo" :key="item.to" :item="item" />
		</ExpansionItem>
	</q-list>
</template>

<script setup>
import LogoCircle from 'src/components/LogoCircle.vue';
import ExpansionItem from './ExpansionItem.vue';
import MenuItem from './MenuItem.vue';
import config from 'src/config';
import { storeToRefs } from 'pinia';
import authStore from 'src/stores/auth-store';

const { getIsLogin, getUser } = storeToRefs(authStore());

const menuUser = [
	// {
	// 	to: '/user/projects',
	// 	icon: 'dashboard',
	// 	label: 'Proyek',
	// 	caption: 'Penelitian dan Pengabdian',
	// 	disable: false,
	// },
	{
		to: '/user/projects/penelitian',
		icon: 'dashboard',
		label: 'Penelitian',
		caption: 'Proyek Penelitian',
		disable: false,
	},
	{
		to: '/user/projects/pengabdian',
		icon: 'dashboard',
		label: 'Pengabdian',
		caption: 'Proyek Pengabdian',
		disable: false,
	},
	{
		to: '/user/profile',
		icon: 'person',
		label: 'Profil',
		caption: 'Data Pengguna',
		disable: false,
	},
];
const menuProjects = [
	{
		to: '/projects/penelitian',
		icon: 'dashboard',
		label: 'Penelitian',
		caption: 'Proyek Penelitian',
		disable: false,
	},
	{
		to: '/projects/pengabdian',
		icon: 'dashboard',
		label: 'Pengabdian',
		caption: 'Proyek Pengabdian',
		disable: false,
	},
];

const menuInfo = [
	{
		to: '/info/release',
		icon: 'new_releases',
		label: 'Release',
		caption: 'App Version',
		disable: false,
	},
	{
		to: '/info/about',
		icon: 'info',
		label: 'Tentang',
		caption: 'Tentang Aplikasi',
		disable: false,
	},
];

const menuSetting = [
	{
		to: '/settings/users',
		icon: 'manage_accounts',
		label: 'Users',
		caption: 'Akses Pengguna',
		disable: false,
	},
	{
		to: '/settings/lists',
		icon: 'list',
		label: 'List',
		caption: 'Auto Complete (Form Isian)',
		disable: false,
	},
];
</script>
