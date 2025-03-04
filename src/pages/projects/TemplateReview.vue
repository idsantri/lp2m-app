<template>
	<div
		class="q-pa-sm flex items-center justify-between q-card--bordered q-mb-sm"
	>
		<div class="text-subtitle1">Riwayat {{ variant?.toUpperCase() }}</div>
		<q-btn
			no-caps
			label="Upload File"
			icon="upload"
			dense
			class="q-px-md"
			outline
			@click="showUpload = !showUpload"
		/>
	</div>
	<div v-if="loading">
		<q-spinner-cube
			color="brown-12"
			size="8em"
			class="flex q-ma-lg q-mx-auto"
		/>
	</div>
	<div v-else>
		<InputFile
			v-if="showUpload"
			class="q-mt-sm"
			:label="'Pilih file ' + variant"
			hint="Hanya menerima file pdf"
			v-model="fileUpload"
			@on-Upload="uploadFile"
			:loading="loadingUpload"
		/>
		<q-list bordered v-if="review?.length > 0" separator>
			<q-item
				v-for="(item, index) in review"
				:key="index"
				separator
				class="q-pa-sm"
			>
				<q-item-section avatar>
					<q-btn
						icon="delete"
						outline=""
						color="negative"
						glossy
						round=""
						@click="onDelete(item)"
					/>
				</q-item-section>
				<q-item-section>
					<q-item-label caption>
						{{
							formatDate(
								new Date(item.created_at),
								'dd MMMM yyyy',
							)
						}}
					</q-item-label>

					<q-item-label v-if="item.file">
						<a :href="item.file_url">
							{{ item.file.split('~').pop() }}
						</a>
					</q-item-label>
					<q-item-label>
						{{ item.kesimpulan }}
					</q-item-label>
				</q-item-section>
				<q-item-section avatar>
					<q-btn
						label="Review"
						no-caps=""
						outline
						glossy
						:to="`/penelitian-review/${item.id}`"
					/>
				</q-item-section>
			</q-item>
		</q-list>
		<q-card v-else flat class="text-negative text-center q-pa-lg">
			Belum ada riwayat
		</q-card>
	</div>
	<!-- <pre>
		{{ proposal }}
	</pre> -->
</template>
<script setup>
import apiGet from 'src/api/api-get';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import InputFile from 'src/components/InputFile.vue';
import { formatDate } from 'src/utils/format-date';
import apiPost from 'src/api/api-post';
import apiDelete from 'src/api/api-delete';

const props = defineProps({
	variant: {
		type: String,
		required: true,
	},
});

const review = ref([]);
const { params } = useRoute();
const loading = ref(false);
const loadingUpload = ref(false);
const showUpload = ref(false);
const fileUpload = ref(null);

const loadData = async () => {
	const data = await apiGet({
		endPoint: 'reviews',
		params: { project_id: params.id, type: props.variant },
		loading,
	});
	if (data) {
		review.value = data.reviews;
	}
};

onMounted(async () => {
	await loadData();
});

const uploadFile = async () => {
	const file = fileUpload.value;
	if (!file) {
		notifyError('Pilih file ' + props.variant + ' terlebih dahulu!');
		return;
	}

	const formData = new FormData();
	formData.append('file', file);

	const response = await apiPost({
		endPoint: 'reviews/upload',
		data: formData,
		loading: loadingUpload,
		config: {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			params: { project_id: params.id, type: props.variant },
		},
	});

	if (response) {
		showUpload.value = false;
		fileUpload.value = null;
		await loadData();
	}
};

const onDelete = async ({ id }) => {
	const response = await apiDelete({
		endPoint: `reviews/${id}`,
		loading: loading,
		message: '<span style="color: red">Hapus file ini?</span>',
	});
	if (response) {
		await loadData();
	}
};
</script>
