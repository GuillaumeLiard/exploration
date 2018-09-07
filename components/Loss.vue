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
			}

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
			}
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
			.domain(this.domain.x)
			.range([0, this.width])
			this.scaleY = scaleLinear()
			.domain(this.domain.y)
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
			this.ctx.beginPath()
			if (this.$store.state.model.history) {
				const losses = this.$store.state.model.fullHistory.map(h => h.history.loss[0])
				this.ctx.moveTo(0, 0)
				for (let [i, loss] of losses.entries()) {
					this.ctx.lineTo(this.scaleX(i), this.height - this.scaleY(loss))
				}
			}
			this.ctx.stroke()
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
