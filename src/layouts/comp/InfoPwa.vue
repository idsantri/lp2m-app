<template>
	<div v-if="!isPwaInstalled && isMobile()" class="q-mb-md">
		<q-list
			separator
			dark
			class="bg-brown-13 text-brown-1 q-card--bordered"
		>
			<q-item>
				<q-item-section>
					Instal aplikasi untuk mendapatkan pengalaman lebih
					baik!</q-item-section
				>
				<q-item-section side center>
					<q-btn
						v-if="isAndroid()"
						icon="install_mobile"
						round
						class="text-brown-11 bg-brown-9"
						glossy
						@click="installPwa"
					/>
					<q-btn
						v-if="isIos()"
						icon="install_mobile"
						round
						class="text-brown-11 bg-brown-9"
						glossy
						@click="showIos = !showIos"
					/>
				</q-item-section>
			</q-item>
			<q-item v-if="showIos">
				<q-item-section @click="showIos = false">
					<p class="no-margin text-subtitle1 text-weight-light">
						Bagi Pengguna iOS!
					</p>
					<ol class="no-margin q-pl-md text-weight-light">
						<li>
							Pastikan Anda menggunakan browser
							<span class="text-weight-medium">Safari</span>;
						</li>
						<li>
							Ketuk ikon &ldquo;bagikan&rdquo; (sebuah kotak
							dengan panah ke atas di bagian bawah layar);
						</li>
						<li>
							Gulir ke bawah dalam menu bagikan dan pilih opsi
							&ldquo;Tambahkan ke Layar Utama&rdquo;;
						</li>
						<li>
							Anda mungkin akan diminta untuk memberikan nama dan
							mengonfigurasi ikon;
						</li>
						<li>
							Ketuk &ldquo;Tambahkan&rdquo; di pojok kanan atas
							layar untuk menyelesaikan proses;
						</li>
					</ol>
				</q-item-section>
			</q-item>
		</q-list>
	</div>
</template>
<script setup>
import { ref } from 'vue';

/**
 * -----------------------------------------
 * PWA
 * -----------------------------------------
 */
const showIos = ref(false);
const getOS = () => {
	const userAgent = window.navigator.userAgent;
	const osList = [
		{ regex: /windows/i, name: 'Windows' },
		{ regex: /android/i, name: 'Android' },
		{ regex: /(iphone|ipad|ipod)/i, name: 'iOS' },
		{ regex: /linux/i, name: 'Linux' },
		{ regex: /mac/i, name: 'Mac/iOS' },
	];

	return (
		osList.find(({ regex }) => regex.test(userAgent))?.name || 'Unknown OS'
	);
};
const isIos = () => getOS() === 'iOS';
const isAndroid = () => getOS() === 'Android';
const isMobile = () => isIos() || isAndroid();

const deferredPrompt = ref(null);
window.addEventListener('beforeinstallprompt', (e) => {
	e.preventDefault();
	deferredPrompt.value = e;
});

const isPwaInstalled = ref(
	window.matchMedia('(display-mode: standalone)').matches,
);

const installPwa = () => {
	if (deferredPrompt.value) {
		deferredPrompt.value.prompt();
		deferredPrompt.value.userChoice.then((choiceResult) => {
			if (choiceResult.outcome === 'accepted') {
				console.log('User accepted the A2HS prompt');
			} else {
				console.log('User dismissed the A2HS prompt');
			}
		});
		// reset
		deferredPrompt.value = null;
	}
};
</script>
