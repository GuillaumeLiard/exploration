<template>
  <div class="model">
	  model : operator OR <br>
		<button @click="start">
			start
		</button>
		<!-- <button @click="train">
			train :
		</button>
		<button @click="predict">
			predict :
		</button> -->
		<div class="face2face">
			<Inputs/>
			<Prediction/>
		</div>
		<Info />
	</div>
</template>

<script>
	import * as tf from '@tensorflow/tfjs'
	import Inputs from '~/components/Inputs'
	import Prediction from '~/components/Prediction2D'
	// import Button from '~/components/Button'
	import Info from '~/components/Info'

		export default {
			components: {
				Inputs,
				Prediction,
				// Button,
				Info
			},
			mounted: function() {
				console.log(this.$store)
				this.initHiddenLayer()
				this.initOutputLayer()
				this.initModel()
				this.compileModel()
				this.initInputs()
			},
			methods: {
				initHiddenLayer: function() {
					this.$store.commit('addHiddenLayer',
						tf.layers.dense({
							units: 1,
							inputShape: [2],
							activation: 'sigmoid'
						})
					)
				},
				initOutputLayer: function() {
					this.$store.state.model.layers.outputLayer = tf.layers.dense({
						units: 1,
						activation: 'sigmoid'
					})
				},
				initModel: function() {
					this.$store.commit('createModel', tf.sequential())
					this.$store.commit('addLayer', this.$store.state.model.layers.hiddenLayer)
					this.$store.commit('addLayer', this.$store.state.model.layers.outputLayer)
				},
				compileModel: function() {
					this.$store.commit('compileModel')
				},
				initInputs: function() {
					this.inputs = tf.tensor2d(this.$store.state.inputs2D)
					this.$store.state.model.trainingSet.xs_tensor = tf.tensor2d(this.$store.state.model.trainingSet.xs)
					this.$store.state.model.trainingSet.ys_tensor = tf.tensor2d(this.$store.state.model.trainingSet.ys)
				},
				start: function() {
					this.$store.dispatch('trainLoop')
					this.$store.dispatch('predictLoop')
				},
				train: function() {
					this.$store.dispatch('train')
				},
				predict: function() {
					this.$store.dispatch('predict')
				}
			}
		}
</script>

<style>
	.info {

		margin-top: 50px;
	}
	.face2face {
		display: flex;
		justify-content: center;
	}
</style>
