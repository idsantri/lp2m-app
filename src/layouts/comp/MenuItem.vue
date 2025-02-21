<template>
	<q-item
		:clickable="!item.disable"
		v-ripple
		:to="item.to"
		:disable="item.disable"
		active-class="text-brown-13"
	>
		<q-item-section avatar>
			<q-icon color="brown-1" :name="item.icon" />
		</q-item-section>
		<q-item-section>
			<q-item-label class="text-brown-11">{{ item.label }}</q-item-label>
			<q-item-label caption class="text-brown-12">
				{{ item.caption }}
			</q-item-label>
		</q-item-section>
	</q-item>
</template>

<script setup>
defineProps({
	item: {
		type: Object,
		required: true,
	},
});
</script>
