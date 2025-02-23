<template>
	<q-layout view="lHh Lpr lFf">
		<q-header elevated>
			<q-toolbar class="bg-brown-9">
				<q-btn
					flat
					dense
					round
					icon="menu"
					aria-label="Menu"
					@click="toggleLeftDrawer"
					class="text-brown-11"
					id="toggle-drawer"
				/>

				<q-toolbar-title class="text-brown-11">
					<span class="text-weight-bold">
						{{ config.PWA_NAME }}:
					</span>
					<span class="text-weight-light">
						{{ config.PWA_DESCRIPTION }}
					</span>
				</q-toolbar-title>

				<ToolbarButton />
			</q-toolbar>
			<div
				class="bg-brown-8 text-brown-2 text-weight-light q-pl-xl dense q-py-sm"
			>
				<div class="q-pl-sm text-weight-light">
					Institut Agama Islam Syaichona Moh Cholil Bangkalan
				</div>
			</div>
		</q-header>
		<q-drawer
			v-model="leftDrawerOpen"
			show-if-above
			bordered
			class="bg-brown-7"
		>
			<suspense>
				<template #default>
					<side-bar />
				</template>
				<template #fallback>
					<div class="spinner">
						<q-spinner-cube color="brown-8" size="8em" />
					</div>
				</template>
			</suspense>
		</q-drawer>
		<q-page-container :key="componentKey">
			<q-page class="q-pa-sm">
				<suspense>
					<template #default>
						<router-view :key="$route.fullPath" />
					</template>
					<template #fallback>
						<div class="spinner">
							<q-spinner-cube color="brown-8" size="8em" />
						</div>
					</template>
				</suspense>
			</q-page>
		</q-page-container>

		<q-footer bordered class="bg-brown-6 text-brown-12">
			<p class="text-center no-margin q-pa-xs">© by idsantri</p>
		</q-footer>
	</q-layout>
</template>

<script setup>
import { ref } from 'vue';
import config from 'src/config';
import SideBar from './comp/SideBar.vue';
import ToolbarButton from './comp/ToolbarButton.vue';
const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);
const componentKey = ref(0);
</script>

<style lang="scss">
.spinner {
	text-align: center;
	margin: 30px auto;
}
</style>
