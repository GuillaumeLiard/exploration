<template>
	<div class="item" :style="{left, top, width, backgroundColor: backgroundColor()}">
		<div class="content">
			{{text}}
			{{readablePrediction()}}
		</div>
	</div>
</template>

<script>
	export default {
		props: [
			'text',
			'prediction',
			'left',
			'top',
			'width'
		],
		methods: {
			readablePrediction: function(){
				if (typeof this.prediction === 'string') {
					return this.prediction
				} else if (typeof this.prediction === 'number'){
					return this.prediction.toFixed(3)
				}
			},
			getPercentPrediction: function() {
				if (typeof this.prediction === 'number') {
					return this.readablePrediction() * 100
				} else {
					return 0
				}
			},
			backgroundColor: function(){
				return `hsl(120, 100%, ${this.getPercentPrediction()}%)`;
			}
		}
	}
</script>


<style scoped>
	.item {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.content {
	}
</style>
