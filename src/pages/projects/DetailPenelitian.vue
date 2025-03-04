<template lang="">
	<q-card class="">
		<CardHeader> Data Penelitian </CardHeader>
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
import DetailProjectById from './DetailProjectById.vue';
import DetailProjectReview from './DetailProjectReview.vue';
import DetailProjectStatus from './DetailProjectStatus.vue';
import DetailProjectOutcome from './DetailProjectOutcome.vue';
</script>
<style lang="scss" scoped></style>
