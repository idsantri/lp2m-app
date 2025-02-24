<template lang="">
	<q-card class="" style="max-width: 600px">
		<CardHeader>Profil Pengguna</CardHeader>

		<q-card-section class="q-pa-sm">
			<div v-if="loading">
				<q-spinner-cube
					color="brown-12"
					size="8em"
					class="flex q-ma-lg q-mx-auto"
				/>
			</div>
			<div v-else>
				<div>
					<div class="absolute-top-right q-ma-sm">
						<q-btn
							icon="camera"
							round
							no-caps
							dense
							glossy
							class="q-ma-xs q-px-sm"
							@click="showUploader = true"
						/>
					</div>
					<div style="max-width: 150px" class="q-mx-auto">
						<q-img
							:src="
								user?.avatar ? user.avatar : '/user-default.png'
							"
							:ratio="1"
							alt="user"
							:img-style="{
								borderRadius: '50%',
								border: '3px',
								borderColor: 'brown-6',
								borderStyle: 'solid',
							}"
						/>
					</div>
				</div>
				<!-- <div v-if="!user.confirmed_at">
						<div class="text-center q-my-lg">
							<div
								class="q-pa-md text-negative bg-red-1"
								style="border-radius: 10px"
							>
								<div>Akun Anda belum terkonfirmasi.</div>
								<div>Silakan hubungi Admin!</div>
							</div>
						</div>
					</div> -->
				<q-list bordered separator class="q-mt-sm">
					<q-item class="q-pa-sm">
						<q-item-section>
							<q-item-label overline>User</q-item-label>
							<q-item-label>
								<table>
									<tr>
										<td class="text-italic text-caption">
											Nama
										</td>
										<td>
											{{ user?.prefix }}
											{{ user.name
											}}{{
												user?.suffix
													? ', ' + user.suffix
													: ''
											}}
										</td>
									</tr>
									<tr>
										<td class="text-italic text-caption">
											Email
										</td>
										<td>{{ user.email }}</td>
									</tr>
									<tr>
										<td class="text-italic text-caption">
											Username
										</td>
										<td>{{ user.username }}</td>
									</tr>
									<tr>
										<td class="text-italic text-caption">
											NIDN
										</td>
										<td>{{ user.nidn || '-' }}</td>
									</tr>
									<tr>
										<td class="text-italic text-caption">
											Prodi
										</td>
										<td>{{ user.prodi || '-' }}</td>
									</tr>
									<tr>
										<td class="text-italic text-caption">
											Nomor Telepon
										</td>
										<td>{{ user.phone || '-' }}</td>
									</tr>
								</table>
							</q-item-label>
							<q-item-label
								class="bg-brown-1 flex items-center justify-between"
							>
								<div class="">
									<q-btn
										label="Profil"
										icon="edit"
										no-caps
										dense
										class="q-my-xs q-mx-sm q-px-sm"
										@click="showProfile = true"
									/>
								</div>
								<div class="">
									<q-btn
										label="User"
										icon="edit"
										no-caps
										dense
										class="q-my-xs q-mx-sm q-px-sm"
										@click="showUsername = true"
									/>
									<q-btn
										label="Password"
										icon="edit"
										no-caps
										dense
										class="q-my-xs q-mx-sm q-px-sm"
										@click="changePassword"
									/>
								</div>
							</q-item-label>
						</q-item-section>
					</q-item>
					<q-item class="q-pa-sm bg-brown-1">
						<q-item-section>
							<q-item-label overline>User Group</q-item-label>
							<q-item-label>
								<div
									class="fit row wrap justify-start items-start content-start"
								>
									<div
										v-for="(item, index) in user.roles"
										:key="index"
										class="col-6"
									>
										<q-toggle
											:model-value="item"
											color="brown-7"
											:label="titleCase(index)"
											disable
										/>
									</div>
								</div>
							</q-item-label>
						</q-item-section>
					</q-item>
				</q-list>
			</div>
		</q-card-section>
	</q-card>

	<!-- MODAL -->
	<q-dialog v-model="showUsername">
		<CardUsername :is-new="false" :data="user" @success-submit="loadData" />
	</q-dialog>
	<q-dialog v-model="showProfile">
		<CardProfile :is-new="false" :data="user" @success-submit="loadData" />
	</q-dialog>
	<upload-image
		:show-uploader="showUploader"
		:url="`/user/avatar`"
		:width="300"
		:height="300"
		fieldImage="avatar"
		img-format="webp"
		@update-uploader="updateUploader"
		@success-upload="successUpload"
	/>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import apiGet from 'src/api/api-get';
import { titleCase } from 'src/utils/format-text';
import { notifyAlert } from 'src/utils/notify';
import UploadImage from 'src/components/ImageUploader.vue';
import CardUsername from './CardUsername.vue';
import CardProfile from './CardProfile.vue';
import authStore from 'src/stores/auth-store';
import CardHeader from 'src/components/CardHeader.vue';

const user = ref({});
const loading = ref(false);
const showUsername = ref(false);
const showProfile = ref(false);

const showUploader = ref(false);
const updateUploader = (val) => (showUploader.value = val);
const auth = authStore();
async function successUpload() {
	showUploader.value = false;
	await loadData();
}

async function loadData() {
	const data = await apiGet({ endPoint: 'user', loading });
	user.value = data.user;
	auth.updateUser(data.user);
}

onMounted(async () => {
	await loadData();
});

const changePassword = async () => {
	await notifyAlert(
		'Untuk mengganti password, silakan <strong>logout (keluar)</strong>. Pada halaman login, klik <strong>lupa password</strong>.<br/>Ikuti petunjuk yang diberikan.',
		0,
	);
};
</script>
<style lang=""></style>
