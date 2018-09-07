<template>
	<div>
		<canvas @click="drawLines" ref="canvasLoss" :width="width + 'px'" :height="height + 'px'"></canvas>
		<p>

			{{historyLength}}
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
	// watch: {
	// 	getFullHistoryLength: function() {
	// 		console.log('abc')
	// 	}
	// },
	methods: {
		init: function() {
			this.ctx = this.$refs.canvasLoss.getContext('2d')
			this.makeScales()
			this.drawLines()
		},
		makeScales: function() {
			this.scaleX = scaleLinear()
			.domain([0, 2000])
			.range([0, this.width])
			this.scaleY = scaleLinear()
			.domain([-0.5,0.5])
			.range([0, this.height])
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
		}
	}
}
</script>

<style>
canvas {
	border: 1px solid black;
}
</style>
