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
				<q-item-label class="text-brown-11">HOME</q-item-label>
			</q-item-section>
		</q-item>

		<!-- USER -->
		<ExpansionItem label="Dashboard" :separator="true">
			<MenuItem v-for="item in menuUser" :key="item.to" :item="item" />
		</ExpansionItem>

		<!-- PROJECT -->
		<ExpansionItem label="Proyek" :separator="true">
			<MenuItem v-for="item in menuProject" :key="item.to" :item="item" />
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
	{
		to: '/user/penelitian',
		icon: 'dashboard',
		label: 'Penelitian',
		caption: 'Proposal dan Laporan Penelitian',
		disable: false,
	},
	{
		to: '/user/pengabdian',
		icon: 'dashboard',
		label: 'Pengabdian',
		caption: 'Proposal dan Laporan Pengabdian',
		disable: true,
	},
	{
		to: '/user/extend',
		icon: 'dashboard',
		label: 'Ekstensi',
		caption: 'Pranala Luar',
		disable: true,
	},
	{
		to: '/user/profile',
		icon: 'person',
		label: 'Profil',
		caption: 'Data Pengguna',
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
const menuProject = [
	{
		to: '/penelitian',
		icon: 'dashboard',
		label: 'Penelitian',
		caption: 'Proposal dan Laporan',
		disable: false,
	},
	{
		to: '/',
		icon: 'dashboard',
		label: 'Pengabdian',
		caption: 'Proposal dan Laporan',
		disable: true,
	},
	{
		to: '/',
		icon: 'dashboard',
		label: 'Ekstensi',
		caption: 'Data Pranala Luar',
		disable: true,
	},
];
</script>
