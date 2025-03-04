<template lang="">
	<q-card class="">
		<CardHeader> Data Penelitian dan Pengabdian</CardHeader>
		<q-card-section class="no-padding">
			<div class="row">
				<div class="col-12 col-sm-6 col-lg-4 q-pa-sm">
					<DetailProjectById />
				</div>
				<div class="col-12 col-sm-6 col-lg-4 q-pa-sm">
					<DetailProjectReview />
				</div>
				<div class="col-12 col-sm-6 col-lg-4 q-pa-sm">
					<DetailProjectStatus />
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
</script>
<style lang="scss" scoped></style>
