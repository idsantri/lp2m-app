<template lang="">
	<div v-if="!auth.getIsLogin" class="flex items-center q-gutter-sm">
		<q-btn
			glossy
			dense
			outline
			color="brown-1"
			to="/login"
			class="text-brown-11 q-px-md text-weight-light"
			no-caps
		>
			Login
			<!-- <q-badge v-if="badge" floating color="brown-13" rounded /> -->
		</q-btn>
		<q-btn
			glossy
			outline
			dense
			color="brown-1"
			to="/register"
			class="text-brown-11 q-px-md text-weight-light"
			no-caps
		>
			Register
			<!-- <q-badge v-if="badge" floating color="brown-13" rounded /> -->
		</q-btn>
	</div>
	<div v-else>
		<q-btn-dropdown
			flat
			round
			dense
			dropdown-icon="more_vert"
			class="q-pl-md"
			color="brown-11"
		>
			<q-list>
				<q-item clickable v-close-popup to="/profile">
					<q-item-section>Profil</q-item-section>
					<q-item-section avatar>
						<q-icon color="brown-6" name="3p" />
					</q-item-section>
				</q-item>

				<q-item clickable v-close-popup to="/logout">
					<q-item-section>Keluar</q-item-section>
					<q-item-section avatar>
						<q-icon color="red" name="logout" />
					</q-item-section>
				</q-item>
			</q-list>
		</q-btn-dropdown>
	</div>
</template>
<script setup>
import authStore from 'src/stores/auth-store';
const auth = authStore();
</script>
<style lang=""></style>
