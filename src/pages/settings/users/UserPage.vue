<template>
	<q-card>
		<CardHeader>Data Pengguna</CardHeader>

		<q-table
			class="q-px-sm"
			:rows="users"
			:columns="columns"
			row-key="name"
			:loading="loading"
			:filter="filter"
			@row-click="
				(evt, row, index) => $router.push(`/settings/users/${row.id}`)
			"
			:rows-per-page-options="[10, 25, 50, 75, 100, 0]"
		>
			<!-- <template v-slot:top-left>
					<div class="text-h6 text-brown-10">Data Pengguna</div>
				</template> -->
			<template v-slot:top-right>
				<q-input
					outlined
					dense
					debounce="300"
					v-model="filter"
					placeholder="Cari"
				>
					<template v-slot:append>
						<q-icon name="search" />
					</template>
				</q-input>
			</template>
		</q-table>
	</q-card>
	<!-- <pre>{{ users }}</pre> -->
</template>
<script setup>
import apiGet from 'src/api/api-get';
import { onMounted, ref } from 'vue';
import CardHeader from 'src/components/CardHeader.vue';

const filter = ref('');
const loading = ref(false);
const users = ref([]);

const columns = [
	{
		name: 'name',
		label: 'Nama',
		align: 'left',
		field: 'name',
		sortable: true,
		// sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
	},
	{
		name: 'username',
		label: 'Username',
		align: 'left',
		field: 'username',
		sortable: true,
		// sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
	},
	{
		name: 'email',
		label: 'Email',
		align: 'left',
		field: 'email',
		sortable: true,
		// sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
	},
	{
		name: 'roles',
		label: 'Group (Role)',
		align: 'left',
		field: 'roles',
		sortable: true,
		// sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
	},

	{
		name: 'verified',
		label: 'Verikasi',
		align: 'left',
		field: 'email_verified_at',
		format: (val) => `${val ? 'Ya' : 'Tidak'}`,
		sortable: true,
		// sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
	},
];

async function getUsers() {
	const data = await apiGet({
		endPoint: 'users',
		loading: loading,
	});
	users.value = data.users;
	// console.log(users.value);
}

onMounted(async () => {
	await getUsers();
});
</script>
<style></style>
