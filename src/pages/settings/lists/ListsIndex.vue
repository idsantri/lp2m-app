<template>
	<q-card style="max-width: 600px">
		<CardHeader>Input Auto Complete</CardHeader>
		<q-card-section class="q-pa-sm">
			<q-select
				dense
				outlined
				label="Pilih List"
				v-model="listModel"
				:options="options"
				emit-value
				map-options
				@update:model-value="(v) => routerPush(v)"
				behavior="menu"
			/>
		</q-card-section>
		<q-card-section class="q-pa-sm">
			<!-- ROUTER -->
			<q-card v-if="listModel" class="">
				<router-view :key="$route.fullPath" />
			</q-card>

			<q-card v-else class="">
				<q-card-section
					class="bg-brown-1 text-center text-italic text-subtitle1 q-pa-lg"
				>
					Silakan pilih lists yang tersedia!
				</q-card-section>
			</q-card>
		</q-card-section>
	</q-card>
	<!-- <pre>list model:{{ listModel }}</pre> -->
	<!-- <pre>list data:{{ listData }}</pre> -->
</template>
<script setup>
import { onMounted, ref } from 'vue';
import listData from './lists-data';
import { useRoute, useRouter } from 'vue-router';
import CardHeader from 'src/components/CardHeader.vue';

const router = useRouter();
const { params } = useRoute();

const listKey = params.listKey;
const listModel = ref(listData.find(({ url }) => url == listKey));
const options = ref([]);

/**
 * JANGAN tampilkan tingkat pendidikan
 * filter lists
 **/
onMounted(() => {
	options.value = listData.filter((item) => item.protected == false);
});

function routerPush(list) {
	router.push(`/settings/lists/${list.url}`);
}
</script>
