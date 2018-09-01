<template>
	<div class="prediction" :style="{width, height}">
		<PredictionItem v-for="(value, key) in predictions"
			:left="getLeft(key)"
			:top="getTop(key)"
			:width="itemWidth"
			:height="itemHeight"
			:key="key">
				<!-- {{value.text}} -->
				{{getPrediction(value.prediction)}}
		</PredictionItem>
	</div>
</template>
<script>
	import PredictionItem from '~/components/PredictionItem'

	export default {
		components: {
			PredictionItem
		},
		data: function() {
			return {
				rows: 2,
				columns: 2,
				sizeRow: 200,
				sizeColumn: 200,
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
		computed: {
			width: function() {
				return `${this.rows * this.sizeRow}px`
			},
			height: function() {
				return `${this.columns * this.sizeColumn}px`
			},
			itemWidth: function() {
				return `${this.sizeRow}px`
			},
			itemHeight: function() {
				return `${this.sizeColumn}px`
			},
		},
		methods: {
			getPrediction: function(predictionIndex) {
				return this.$store.state.model.prediction ? this.$store.state.model.prediction[predictionIndex] : '';
			},
			getA: function() {
				return 'A'
			},
			getLeft: function(key) {
				return `${(key % this.rows ) * this.sizeRow}px`
			},
			getTop: function(key) {
				return `${(Math.floor(key / this.columns) ) * this.sizeColumn}px`
			}
		}
	}
</script>

<style>
	.prediction {

		position: relative;
		width: 100%;
		max-width: 600px;
		display: flex;
		flex-wrap: wrap;
	}
</style>
