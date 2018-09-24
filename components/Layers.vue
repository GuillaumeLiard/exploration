<template>
	<div class="layers">
		<h2>Layers</h2>
		<p>
			weights
		</p>
		<ul>
			<li v-for="(value, key) in weights"
				:key="key">
					{{value}}
			</li>
		</ul>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		computed: {
			...mapGetters({
				weights: 'getWeights',
			})
		},
	}
</script>
