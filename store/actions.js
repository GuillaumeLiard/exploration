import * as tf from '@tensorflow/tfjs'

export default {
	addLayers({commit, state}) {
		// console.log('addLayers', tf.memory().numTensors)
		for (let layer of state.config.layers) {
			const tfLayer = tf.layers.dense(layer.params)
			commit('addLayer', tfLayer)
		}
	},
	compileModel({commit, state}) {
		// console.log('compileModel', tf.memory().numTensors)
		state.model.model.compile({
			optimizer: (state.config.optimizer.type === 'sgd') ? tf.train.sgd(state.config.optimizer.params.rate) : '',
			loss: state.config.loss
		})
		commit('setCompileStatus', true)
	},
	async train({ commit, dispatch, state }) {
		// console.log('train', tf.memory().numTensors)
		const history = await state.model.model.fit(
			state.model.trainingSet.xs_tensor,
			state.model.trainingSet.ys_tensor,
			state.config.training.params
		)
		commit('increment')
		commit('setHistory', history)
		if (state.loop) dispatch('train')
	},
	async predict({ commit, dispatch, state }) {
		console.log('predict', tf.memory().numTensors)
		const inputs = tf.tensor2d(state.inputs2D)
		const prediction = state.model.model.predict(inputs)
		const predictionData = await prediction.data()
		tf.dispose(inputs)
		tf.dispose(prediction)
		commit('setCurrentPrediction', predictionData)
		// console.log(state.model.model.getWeights())
		if (state.loop) dispatch('predict')
	},
}
