<template>
  <div class="model">
	  model
		<button @click="this.trainModel" class="prediction__button">
			train
		</button>
		<button @click="this.predict" class="prediction__button">
			predict :
		</button>
			<div class="prediction">
				prediction: {{this.prediction}}
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
					// function AND
					trainingSet: {
						xs: [
							[0, 0],
							[0, 1],
							[1, 0],
							[1, 1]
						],
						// [expected probability of true, expected probability of false]
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

</style>
