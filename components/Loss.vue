<template>
	<div>
		<canvas ref="canvasLoss" :width="width + 'px'" :height="height + 'px'"></canvas>
		<p>
			Number of loss data points {{historyLength}}
		</p>
	</div>
</template>
<script>
import {mapGetters} from 'vuex'
import {scaleLinear} from 'd3-scale'


export default {
	data: function() {
		return {
			width: 1000,
			height: 400,
			canvasNeedsUpdate: false
			// historyLength: 10
		}
	},
	mounted: function() {
		this.init()
	},
	computed: {
		...mapGetters({
			historyLength: 'getFullHistoryLength'
		})
	},
	watch: {
		historyLength: function() {
			this.canvasNeedsUpdate = true
		}
	},
	methods: {
		init: function() {
			this.ctx = this.$refs.canvasLoss.getContext('2d')
			this.makeScales()
			this.loopDrawLines()
		},
		makeScales: function() {
			this.scaleX = scaleLinear()
			.domain([0, 2000])
			.range([0, this.width])
			this.scaleY = scaleLinear()
			.domain([-0.5,0.5])
			.range([0, this.height])
		},
		loopDrawLines: function() {
			if (this.canvasNeedsUpdate) {
				this.drawLines()
				this.canvasNeedsUpdate = false
			}
			requestAnimationFrame(this.loopDrawLines)

		},
		drawLines: function() {
			console.log('drawLines', this.historyLength)
			this.ctx.beginPath()
			if (this.$store.state.model.history) {
				const losses = this.$store.state.model.fullHistory.map(h => h.history.loss[0])
				this.ctx.moveTo(0, 0)
				for (let [i, loss] of losses.entries()) {
					this.ctx.lineTo(this.scaleX(i), this.height - this.scaleY(loss))
				}
			}
			this.ctx.stroke()
		}
	}
}
</script>

<style>
canvas {
	border: 1px solid black;
}
</style>
