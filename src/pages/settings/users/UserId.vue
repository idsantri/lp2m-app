<template lang="">
	<q-card class="" style="max-width: 600px">
		<q-card-section class="bg-brown-7 text-brown-11 q-pa-sm">
			<div class="flex items-center">
				<div class="text-subtitle2">Profil Pengguna</div>
				<q-space />
				<q-btn
					no-caps
					label="Kembali"
					icon="reply"
					dense
					class="q-px-md"
					outline
					@click="$router.go(-1)"
				/>
			</div>
		</q-card-section>

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
								borderColor: 'brown-7',
								borderStyle: 'solid',
							}"
						/>
					</div>
				</div>

				<q-list bordered separator class="q-mt-sm">
					<q-item class="q-pa-sm">
						<q-item-section>
							<q-item-label overline>User</q-item-label>
							<q-item-label v-if="user">
								<table>
									<tr>
										<td class="text-italic text-caption">
											Nama
										</td>
										<td>
											{{ user.prefix }}
											{{ user.name
											}}{{
												user.suffix
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
						</q-item-section>
					</q-item>
					<q-item class="q-pa-sm bg-brown-1">
						<q-item-section>
							<q-item-label overline> User Status</q-item-label>
							<q-item-label v-if="user">
								<div class="row">
									<div class="col-md-6 col-sm-12">
										<q-toggle
											:model-value="
												user.email_verified_at
													? true
													: false
											"
											label="Verifikasi"
											disable=""
											color="brown-7"
										/>
										<div class="q-pl-md text-caption">
											Verifikasi akun hanya bisa dilakukan
											oleh user yang bersangkutan.
										</div>
									</div>
									<div class="col-md-6 col-sm-12">
										<q-toggle
											disable
											:model-value="
												user.confirmed_at ? true : false
											"
											label="Konfirmasi"
											color="brown-7"
											@update:model-value="confirmUser"
										/>
										<div class="q-pl-md text-caption">
											Konfimasi bahwa Anda mengenal user
											ini.
										</div>
									</div>
								</div>
							</q-item-label>
						</q-item-section>
					</q-item>
					<q-item class="q-pa-sm">
						<q-item-section>
							<q-item-label overline>
								User Group (Role)
							</q-item-label>
							<q-item-label v-if="user">
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
											:label="kebabToTitleCase(index)"
											@update:model-value="
												setRole(index, item)
											"
											:true-value="true"
											:false-value="false"
										/>
									</div>
								</div>
							</q-item-label>
						</q-item-section>
					</q-item>
				</q-list>
			</div>
		</q-card-section>
		<q-card-actions class="bg-brown-7 q-pa-sm">
			<q-btn
				label="Hapus"
				color="negative"
				no-caps=""
				@click="deleteUser"
				:disable="user?.id ? false : true"
			/>
		</q-card-actions>
	</q-card>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import apiGet from 'src/api/api-get';
import apiUpdate from 'src/api/api-update';
import apiDelete from 'src/api/api-delete';
import { kebabToTitleCase } from 'src/utils/format-text';

const user = ref({});
const loading = ref(false);
const { params } = useRoute();
const router = useRouter();

async function setRole(role, value) {
	user.value.roles[role] = !value;
	const data = { role, value: !value };
	// console.log(data);
	const update = await apiUpdate({
		endPoint: `users/${user.value.id}/roles`,
		data,
		confirm: false,
	});
	if (!update) return (user.value.roles[role] = value);
}

async function confirmUser(val) {
	user.value.confirmed_at = !user.value.confirmed_at;
	const data = { confirm: val };

	const result = await apiUpdate({
		endPoint: `users/${user.value.id}/confirm`,
		data,
		confirm: false,
	});

	if (!result) return (user.value.confirmed_at = !user.value.confirmed_at);
}

async function loadData() {
	const data = await apiGet({ endPoint: `users/${params.id}`, loading });
	user.value = data.user;
	// console.log(user.value);
}

async function deleteUser() {
	const del = await apiDelete({ endPoint: `users/${user.value.id}` });
	if (del) {
		router.go(-1);
	}
}

onMounted(async () => {
	await loadData();
});
</script>
<style lang=""></style>
