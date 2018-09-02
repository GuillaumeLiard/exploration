<template>
  <div class="model">
	  model : operator OR <br>
		<button @click="start">
			start
		</button>
		<LoopCheckbox />
		<p>
			iterations : {{counter()}}
		</p>
		<!-- <button @click="train">
			train :
		</button>
		<button @click="predict">
			predict :
		</button> -->
		<div class="face2face">
			<!-- <Inputs/> -->
			<Prediction/>
		</div>
		<Info />
	</div>
</template>

<script>
	import * as tf from '@tensorflow/tfjs'
	import Inputs from '~/components/Inputs'
	import Prediction from '~/components/Prediction2D'
	import LoopCheckbox from '~/components/LoopCheckbox'
	// import Button from '~/components/Button'
	import Info from '~/components/Info'

		export default {
			components: {
				Inputs,
				Prediction,
				LoopCheckbox,
				// Button,
				Info
			},
			mounted: function() {
				this.$store.commit('createModel', tf.sequential())
				this.$store.dispatch('addLayers')
				this.$store.dispatch('compileModel')
				this.initInputs()
			},
			methods: {
				counter: function() {
					return this.$store.state.counter
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
				stop: function() {
					this.$store.commit('pauseLoop')
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
