import { Notify } from 'quasar';
import { Dialog } from 'quasar';

const notifySuccess = (message) => {
	Notify.create({
		type: 'positive',
		message: message,
		color: 'green-5',
		textColor: 'green-11',
		html: true,
	});
};
const notifyError = (message) => {
	Notify.create({
		type: 'negative',
		message: message,
		html: true,
	});
};
const notifyWarning = (message) => {
	Notify.create({
		type: 'warning',
		message: message,
		html: true,
	});
};

const notifyAlert = (message, delay = 10) => {
	return new Promise((resolve) => {
		Notify.create({
			message: message,
			color: 'green-1',
			textColor: 'green-10',
			timeout: 1000 * delay,
			html: true,
			icon: 'announcement',
			multiLine: true,
			closeBtn: true,
			position: 'center',
			onDismiss: resolve, // resolve promise ketika notifikasi ditutup
		});
	});
};
async function notifyConfirm(
	message,
	persistent = false,
	title = 'Konfirmasi',
) {
	return new Promise((resolve) => {
		Dialog.create({
			title: title,
			message: message,
			cancel: true,
			persistent: persistent,
			html: true,
		})
			.onOk(async () => {
				resolve(true);
			})
			.onCancel(() => {
				resolve(false);
			})
			.onDismiss(() => {
				resolve(false);
			});
	});
}
const notifyWarningExpired = () => {
	notifyWarning('Sesi telah berakhir.');
	notifyWarning('Anda perlu keluar lalu masuk lagi!');
};
export {
	notifySuccess,
	notifyError,
	notifyWarning,
	notifyAlert,
	notifyConfirm,
	notifyWarningExpired,
};
