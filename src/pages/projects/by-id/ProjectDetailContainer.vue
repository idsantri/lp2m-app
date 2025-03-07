<template lang="">
	<q-card class="">
		<CardHeader> Data Proyek</CardHeader>
		<q-card-section class="no-padding">
			<div class="row">
				<div class="col-12 col-sm-6 col-lg-4 q-pa-sm">
					<DetailProjectById
						@onLoad="
							(project) =>
								project.jenis?.toLowerCase() == 'pengabdian'
									? (isPengabdian = true)
									: (isPengabdian = false)
						"
					/>
				</div>
				<div class="col-12 col-sm-6 col-lg-4 q-pa-sm">
					<DetailProjectReview :is-pengabdian="isPengabdian" />
				</div>
				<div class="col-12 col-sm-6 col-lg-4 q-pa-sm">
					<DetailProjectStatus :is-pengabdian="isPengabdian" />
				</div>
				<div class="col-12 col-sm-6 col-lg-4 q-pa-sm">
					<DetailProjectOutcome />
				</div>
			</div>
		</q-card-section>
	</q-card>
</template>
<script setup>
import CardHeader from 'src/components/CardHeader.vue';
import DetailProjectById from './CardProjectById.vue';
import DetailProjectReview from './CardProjectReview.vue';
import DetailProjectStatus from './CardProjectStatus.vue';
import DetailProjectOutcome from './CardProjectOutcome.vue';
import { ref } from 'vue';

const isPengabdian = ref(false);
</script>
<style lang="scss" scoped></style>
