<template>
	<div class="">
		<form @submit.prevent="submitLogin">
			<div class="q-gutter-y-md column">
				<q-input
					bg-color="brown-1"
					outlined
					label="Login"
					name="login"
					v-model="login"
					required
					hint="Username atau email/surel Anda!"
					autocomplete="off"
					autocapitalize="none"
				/>
				<q-input
					id="password"
					bg-color="brown-1"
					outlined
					label="Password"
					name="password"
					v-model="password"
					type="password"
					required
					autocomplete="off"
					autocapitalize="none"
					hint="Password atau kata sandi"
				/>
				<q-btn
					type="submit"
					class="full-width q-pa-sm text-brown-10"
					color="brown-3"
					label="Login"
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
							to="/register"
							label="Belum punya akun? Daftar!"
						/>
						<q-btn
							outline
							color="brown-10"
							class="full-width text-weight-regular q-mt-sm"
							no-caps
							to="/forgot-password"
							label="Lupa password? Atur ulang!"
						/>
					</q-card-section>
				</q-card>
			</div>
		</form>
		<q-spinner-cube
			v-show="showSpinner"
			color="brown-12"
			size="14em"
			class="absolute-center"
		/>
	</div>
</template>

<script setup>
import { onUpdated, ref } from 'vue';
import { useRouter } from 'vue-router';
import api from 'src/api';
import { toArray } from 'src/utils/array-object';
import { notifyAlert, notifySuccess } from 'src/utils/notify';
import authStore from 'stores/auth-store';

const router = useRouter();
const login = ref('');
const password = ref('');
const showSpinner = ref(false);

const emit = defineEmits(['title', 'errors']);
emit('title', 'Login');
emit('errors', []);
const auth = authStore();

const submitLogin = async (e) => {
	const formData = new FormData(e.target);
	const formObject = Object.fromEntries(formData.entries());

	emit('errors', []);
	try {
		showSpinner.value = true;
		const response = await api.post('login', formObject);
		const responseData = response.data;
		const data = responseData.data;
		auth.setUser(data);

		notifySuccess(responseData.message);

		const { user } = data;
		if (!user.confirmed_at) {
			return router.push('/user/profile');
		}

		return router.push('/');
	} catch (error) {
		// console.log('e', error);
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

onUpdated(() => {
	const resend = document.getElementById('resend-email');
	// console.log(resend);
	if (!resend) return;
	resend.addEventListener('click', async (e) => {
		// console.log('anchor clicked');
		emit('errors', []);
		e.preventDefault();
		const href = resend.href.replace('%2540', '@');
		// console.log(href);
		try {
			showSpinner.value = true;
			const response = await api.get(href);
			const notification = notifyAlert(response.data.message, 0);
			await notification; // tunggu notifikasi ditutup
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
	});
});
</script>
<style scoped lang="scss"></style>
