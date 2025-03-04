<template>
	<div
		class="fullscreen bg-brown-6 text-brown-1 text-center q-pa-md flex flex-center"
	>
		<div>
			<div style="font-size: 30vh">404</div>

			<div class="text-h2" style="opacity: 0.4">
				Oops. Nothing here...
			</div>

			<q-btn
				class="q-mt-xl"
				color="brown-1"
				text-color="brown-6"
				unelevated
				@click="$router.go(-1)"
				label="Kembali"
				no-caps
			/>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ErrorNotFound',
});
</script>
