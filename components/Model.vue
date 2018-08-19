<template>
  <div class="model">
	  model : operator OR <br>
		<button @click="this.trainModel" class="prediction__button">
			train
		</button>
		<button @click="this.predict" class="prediction__button">
			predict :
		</button>
			<div class="inputs">
				For :
					A = true
					B = false
			</div>
			<div class="prediction">
				A OR B is true at : {{this.prediction ? this.prediction[0] : ''}} % <br>
				A OR B is false at : {{this.prediction ? this.prediction[1] : ''}} %
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

		export default {
			data: function() {
				return {
					model: null,
					hiddenLayer: null,
					outputLayer: null,
					inputs: null,
					prediction: null,
					history: null,
					inputsArray: [1, 0],
					// function OR
					trainingSet: {
						// [A, B]
						xs: [
							[0, 0],
							[0, 1],
							[1, 0],
							[1, 1]
						],
						// [expected probability of A OR B, expected probability of ! (A OR B)]
						ys: [
							[0 , 1],
							[1, 0],
							[1, 0],
							[1, 0]
						],
						xs_tensor: null,
						ys_tensor: null,
					}
				}
			},
			mounted: function() {
				this.initHiddenLayer()
				this.initOutputLayer()
				this.initModel()
				this.compileModel()
				this.initInputs()
				// this.predict()
			},
			methods: {
				initHiddenLayer: function() {
					this.hiddenLayer = tf.layers.dense({
						units: 1,
						inputShape: [2],
						activation: 'sigmoid'
					})
				},
				initOutputLayer: function() {
					this.outputLayer = tf.layers.dense({
						units: 2,
						activation: 'sigmoid'
					})
				},
				initModel: function() {
					this.model = tf.sequential()
					this.model.add(this.hiddenLayer);
					this.model.add(this.outputLayer);
				},
				compileModel: function() {
					// console.log('todo compile model')
					this.model.compile({
						optimizer: tf.train.sgd(0.1),
						loss: 'meanSquaredError'
					})
				},
				initInputs: function() {
					this.inputs = tf.tensor2d([this.inputsArray])
					this.trainingSet.xs_tensor = tf.tensor2d(this.trainingSet.xs)
					this.trainingSet.ys_tensor = tf.tensor2d(this.trainingSet.ys)
				},
				trainModel: function() {
					this.history = this.model.fit(this.trainingSet.xs_tensor, this.trainingSet.ys_tensor, {
						batchSize: 10,
						epochs: 3
					})
				},
				predict: function() {
					this.prediction = this.model.predict(this.inputs).dataSync()
				}
			}
		}
</script>

<style>
	.info {

		margin-top: 50px;
	}
</style>
