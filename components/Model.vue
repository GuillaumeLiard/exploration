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
		<div class="face2face">
			<Prediction />
		</div>
		<Loss />
		<Info />
	</div>
</template>

<script>
	import * as tf from '@tensorflow/tfjs'
	import Inputs from '~/components/Inputs'
	import Prediction from '~/components/Prediction2D'
	import LoopCheckbox from '~/components/LoopCheckbox'
	import Info from '~/components/Info'
	import Loss from '~/components/Loss'

		export default {
			components: {
				Inputs,
				Prediction,
				LoopCheckbox,
				Info,
				Loss
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
					this.$store.dispatch('train')
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
