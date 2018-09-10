<template>
	<div>
		<p>
			Last loss value {{lastLossValue}}
		</p>
		<canvas ref="canvasLoss" :width="width + 'px'" :height="height + 'px'"></canvas>
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
			canvasNeedsUpdate: false,
			domain: {
				x: [0, 20],
				y: [0, 1]
			},
			range: {
				x: {
					maxPercentWidth: 0.8
				}
			},
			lastDrawnIndex: 0

			// historyLength: 10
		}
	},
	mounted: function() {
		this.init()

	},
	computed: {
		...mapGetters({
			historyLength: 'getFullHistoryLength',
			lastLossValue: 'getLastLossValueHuman'
		})
	},
	watch: {
		historyLength: function() {
			this.canvasNeedsUpdate = true
			if (this.scaleX(this.historyLength) > this.width * this.range.x.maxPercentWidth) {
				const double = parseInt(3 * 1.618 * this.historyLength)
				this.domain.x = [0, double]
				this.makeScales()
				this.clearCanvas()
				this.lastDrawnIndex = 0
			}
			requestAnimationFrame(this.drawLines)
		}
	},
	methods: {
		init: function() {
			this.ctx = this.$refs.canvasLoss.getContext('2d')
			this.makeScales()
		},
		makeScales: function() {
			this.scaleX = scaleLinear()
			.domain(this.domain.x)
			.range([0, this.width])
			this.scaleY = scaleLinear()
			.domain(this.domain.y)
			.range([0, this.height])
		},
		drawLines: function() {
			this.ctx.beginPath()
			if (this.$store.state.model.history) {
				const losses = this.$store.state.model.fullHistory.map(h => h.history.loss[0])
				const toDrawLosses = losses.filter((loss, index) => index >= this.lastDrawnIndex)
				this.ctx.moveTo(this.scaleX(this.lastDrawnIndex), this.height - this.scaleY(losses[this.lastDrawnIndex]))
				for (let [i, loss] of toDrawLosses.entries()) {
					this.ctx.lineTo(this.scaleX(this.lastDrawnIndex + i + 1), this.height - this.scaleY(loss))
				}
				this.ctx.stroke()
				this.lastDrawnIndex++
			}
		},
		clearCanvas: function() {
			this.ctx.clearRect(0, 0, this.width, this.height)
		}
	}
}
</script>

<style>
canvas {
	border: 1px solid black;
}
</style>
