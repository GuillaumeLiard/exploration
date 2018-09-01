<template>
	<div class="item" :style="{left, top, width}">
		<div class="content">
			{{readablePrediction()}}
		</div>
	</div>
</template>

<script>
	export default {
		props: [
			'prediction',
			'left',
			'top',
			'width'
		],
		methods: {
			readablePrediction: function() {
				if (typeof this.prediction === 'string') {
					return this.prediction
				} else if (typeof this.prediction === 'number'){
					return this.prediction.toFixed(3)
				}
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
