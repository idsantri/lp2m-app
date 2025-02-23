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
		<q-btn
			glossy
			dense
			to="/logout"
			class="q-px-md text-weight-light bg-brown-2 text-negative"
			no-caps
		>
			Keluar
			<q-icon name="logout" size="1rem" class="q-ml-sm" />
		</q-btn>
	</div>
</template>
<script setup>
import authStore from 'src/stores/auth-store';
const auth = authStore();
</script>
<style lang=""></style>
