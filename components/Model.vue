<template>
  <div class="model">
	  model : operator OR <br>
		<button @click="this.trainModel" class="prediction__button">
			train
		</button>
		<button @click="this.predict" class="prediction__button">
			predict :
		</button>
		<div class="face2face">
			<Inputs/>
			<Prediction/>
		</div>
		<div class="info">
			vuejs, tensorflowjs <br>
			sequential model with 1 hidden layer of 1 node,<br>
			activation function : 'sigmoid',<br>
			optimizer: 'stochastic gradient descent',<br>
			loss function: 'meanSquaredError'
		</div>
	</div>
</template>

<script>
	import * as tf from '@tensorflow/tfjs'
	import Inputs from '~/components/Inputs'
	import Prediction from '~/components/Prediction'

		export default {
			components: {
				Inputs,
				Prediction
			},
			data: function() {
				return {
					layers: {
						outputLayer: null
					},
					trainingSet: {
						xs: [
							[0, 0],
							[0, 1],
							[1, 0],
							[1, 1]
						],
						ys: [
							[0],
							[1],
							[1],
							[1]
						],
						xs_tensor: null,
						ys_tensor: null
					}
				}
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
					this.layers.outputLayer = tf.layers.dense({
						units: 1,
						activation: 'sigmoid'
					})
				},
				initModel: function() {
					this.model = tf.sequential()
					this.model.add(this.$store.state.model.layers.hiddenLayer);
					this.model.add(this.layers.outputLayer);
				},
				compileModel: function() {
					this.model.compile({
						optimizer: tf.train.sgd(0.1),
						loss: 'meanSquaredError'
					})
				},
				initInputs: function() {
					this.inputs = tf.tensor2d(this.$store.state.inputs2D)
					this.trainingSet.xs_tensor = tf.tensor2d(this.trainingSet.xs)
					this.trainingSet.ys_tensor = tf.tensor2d(this.trainingSet.ys)
				},
				trainModel: function() {
					this.$store.commit('setHistory',
						this.model.fit(this.trainingSet.xs_tensor, this.trainingSet.ys_tensor, {
							batchSize: 10,
							epochs: 3
						})
					)
				},
				predict: function() {
					this.$store.commit('setCurrentPrediction',
						this.model.predict(this.inputs).dataSync()
					)
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
