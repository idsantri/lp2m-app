<template>
	<div class="">
		<form @submit.prevent="reset">
			<div class="q-gutter-y-md column">
				<q-input
					bg-color="brown-1"
					outlined
					v-model="token"
					required
					label="Token"
					placeholder="Masukkan token!"
					hint="Token yang Anda dapatkan dari email/surel"
					autocomplete="off"
				/>
				<q-input
					bg-color="brown-1"
					outlined
					v-model="email"
					type="email"
					required
					label="Email/Surel"
					placeholder="Masukkan email/surel!"
					autocomplete="off"
				/>
				<q-input
					bg-color="brown-1"
					outlined
					v-model="password"
					type="password"
					required
					label="Password"
					placeholder="Masukkan password!"
					autocomplete="off"
					readonly
					onfocus="this.removeAttribute('readonly');"
					onblur="this.setAttribute('readonly','true');"
				/>
				<q-input
					bg-color="brown-1"
					outlined
					v-model="password_confirmation"
					type="password"
					required
					label="Konfirmasi Password"
					placeholder="Ulangi password!"
					autocomplete="off"
					readonly
					onfocus="this.removeAttribute('readonly');"
					onblur="this.setAttribute('readonly','true');"
				/>
				<q-btn
					type="submit"
					class="full-width q-pa-sm text-brown-10"
					color="brown-3"
					label="Ganti Password"
				/>

				<q-card class="my-card" flat>
					<q-card-section
						class="text-brown-10 text-center bg-brown-2 q-pa-sm"
					>
						<q-btn
							outline
							color="brown-10"
							class="full-width text-weight-regular"
							no-caps
							to="/login"
							label="Kembali ke halaman Login"
						/>
					</q-card-section>
				</q-card>
			</div>
		</form>
	</div>
	<q-spinner-cube
		v-show="showSpinner"
		color="brown-12"
		size="14em"
		class="absolute-center"
	/>
</template>

<script setup>
import api from 'src/api';
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import { toArray } from 'src/utils/array-object';
import { notifyAlert } from 'src/utils/notify';

const showSpinner = ref(false);
const router = useRouter();
const email = ref('');
const password = ref('');
const password_confirmation = ref('');

const emit = defineEmits(['title', 'errors']);
emit('title', 'Reset Password');
emit('errors', []);

const { query } = useRoute();
const token = ref(query.token);
// console.log(token.value);

const reset = async () => {
	emit('errors', []);
	try {
		showSpinner.value = true;
		const response = await api.post('reset-password', {
			token: token.value,
			email: email.value,
			password: password.value,
			password_confirmation: password_confirmation.value,
		});
		const notification = notifyAlert(response.data.message, 0);
		await notification; // tunggu notifikasi ditutup
		router.push({ name: 'Login' });
	} catch (error) {
		emit(
			'errors',
			toArray(
				error.response?.data?.message || 'Terjadi sebuah kesalahan',
			),
		);
	} finally {
		showSpinner.value = false;
	}
};
</script>
