<template>
	<div class="prediction">
		<div class="item" v-for="(value, key) in predictions" :key="key">
			{{value.text}}
			{{getPrediction(value.prediction)}}
		</div>
	</div>
</template>
<script>
	export default {
		data: function() {
			return {
				predictions: [
					{
						text: `
							A OR B is true at
						`,
						prediction: 0
					},
					{
						text: `
							A OR B is true at
						`,
						prediction: 1
					},
					{
						text: `
							A OR B is true at
						`,
						prediction: 2
					},
					{
						text: `
							A OR B is true at
						`,
						prediction: 3
					}
				]
			}
		},
		methods: {
			getPrediction: function(predictionIndex) {
				return this.$store.state.model.prediction ? this.$store.state.model.prediction[predictionIndex] : '';
			},
			getA: function() {
				return 'A'
			}
		}
	}
</script>
