<template>
	<canvas ref="canvasLoss" width="1000px" height="1000px"></canvas>
</template>
<script>
	export default {
		mounted: function() {
			this.ctx = this.$refs.canvasLoss.getContext('2d')
			this.ctx.beginPath()
			this.ctx.moveTo(0,0)
			this.ctx.lineTo(100,100)
			this.ctx.stroke()
		}
	}
</script>

<style>
	canvas {
		border: 1px solid black;
	}
</style>
