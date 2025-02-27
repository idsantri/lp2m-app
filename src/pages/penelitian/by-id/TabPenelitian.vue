<template lang="">
	<q-markup-table flat wrap-cells>
		<tbody>
			<tr>
				<td class="">Tanggal Buat</td>
				<td class="">
					{{ formatDate(penelitian.created_at, 'dd MMMM yyyy') }}
				</td>
				<td></td>
			</tr>
			<tr>
				<td class="">Judul</td>
				<td class="" style="font-variant: small-caps">
					{{ penelitian.judul }}
				</td>
				<td></td>
			</tr>
			<tr>
				<td class="">Deskripsi</td>
				<td class="">{{ penelitian.deskripsi }}</td>
				<td></td>
			</tr>
			<tr>
				<td class="">Anggota</td>
				<td class="">{{ penelitian.anggota }}</td>
				<td></td>
			</tr>
			<tr>
				<td class="">File Proposal</td>
				<td class="">
					<span v-if="penelitian.file_proposal">
						<a :href="penelitian.file_proposal_url">
							{{ getLastPartOfURL(penelitian.file_proposal) }}
						</a>
					</span>
					<span v-else class="text-negative">
						Tidak ada file proposal
					</span>
				</td>
				<td class="text-right flex no-wrap justify-end">
					<q-btn
						class="q-mr-md"
						outline
						icon="delete"
						dense
						color="negative"
						@click="deleteFile('proposal')"
						:disable="!penelitian.file_proposal"
					/>
					<q-btn
						outline
						:icon="inputProposal ? 'close' : 'upload'"
						dense
						color="primary"
						@click="inputProposal = !inputProposal"
					/>
				</td>
			</tr>
			<tr v-if="inputProposal" class="">
				<td colspan="3">
					<InputFile
						label="Pilih file proposal"
						hint="Hanya menerima file pdf"
						v-model="fileProposal"
						@on-Upload="uploadFile('proposal')"
						:loading="loadingProposal"
					/>
				</td>
			</tr>
			<tr>
				<td class="">Status Proposal</td>
				<td class="">
					{{ penelitian.status_proposal }}
				</td>
				<td></td>
			</tr>
			<tr>
				<td class="">File Laporan</td>
				<td class="">
					<span v-if="penelitian.file_laporan">
						<a :href="penelitian.file_laporan_url">
							{{ getLastPartOfURL(penelitian.file_laporan) }}
						</a>
					</span>
					<span v-else class="text-negative">
						Tidak ada file laporan
					</span>
				</td>
				<td class="text-right flex no-wrap justify-end">
					<q-btn
						outline
						icon="delete"
						dense
						color="negative"
						@click="deleteFile('laporan')"
						class="q-mr-md"
						:disable="!penelitian.file_laporan"
					/>
					<q-btn
						outline
						:icon="inputLaporan ? 'close' : 'upload'"
						dense
						color="primary"
						@click="inputLaporan = !inputLaporan"
					/>
				</td>
			</tr>
			<tr v-if="inputLaporan" class="">
				<td colspan="3">
					<InputFile
						label="Pilih file laporan"
						hint="Hanya menerima file pdf"
						v-model="fileLaporan"
						@on-Upload="uploadFile('laporan')"
						:loading="loadingLaporan"
					/>
				</td>
			</tr>
			<tr>
				<td class="">Status Laporan</td>
				<td class="">
					{{ penelitian.status_laporan }}
				</td>
				<td></td>
			</tr>
		</tbody>
	</q-markup-table>
	<!-- <pre>child{{ penelitian }}</pre> -->
</template>
<script setup>
import { formatDate } from 'src/utils/format-date';
import InputFile from 'src/components/InputFile.vue';
import { notifyError } from 'src/utils/notify';
import { ref } from 'vue';
import apiPost from 'src/api/api-post';
import apiDelete from 'src/api/api-delete';

const emit = defineEmits([
	'successSubmitProposal',
	'successDeleteProposal',
	'successSubmitLaporan',
	'successDeleteLaporan',
]);

const props = defineProps({
	penelitian: { type: Object, required: true },
});

const inputProposal = ref(false);
const loadingProposal = ref(false);
const fileProposal = ref(null);

const inputLaporan = ref(false);
const loadingLaporan = ref(false);
const fileLaporan = ref(null);

function getLastPartOfURL(url) {
	return url.split('~').pop();
}

const uploadFile = async (type) => {
	const file = type === 'proposal' ? fileProposal.value : fileLaporan.value;
	if (!file) {
		notifyError(`Pilih file ${type}!`);
		return;
	}

	const formData = new FormData();
	formData.append('file', file);

	const response = await apiPost({
		endPoint: `penelitian/${props.penelitian.id}/upload/${type}`,
		data: formData,
		loading: type === 'proposal' ? loadingProposal : loadingLaporan,
		config: {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		},
	});

	if (response) {
		if (type === 'proposal') {
			inputProposal.value = false;
			emit('successSubmitProposal');
		} else {
			inputLaporan.value = false;
			emit('successSubmitLaporan');
		}
	}
};

const deleteFile = async (type) => {
	const response = await apiDelete({
		endPoint: `penelitian/${props.penelitian.id}/delete/${type}`,
		loading: type === 'proposal' ? loadingProposal : loadingLaporan,
		message: `Hapus file ${type} ini?`,
	});
	if (response) {
		if (type === 'proposal') {
			emit('successDeleteProposal');
		} else {
			emit('successDeleteLaporan');
		}
	}
};
</script>
<style lang=""></style>
