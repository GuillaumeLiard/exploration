import * as tf from '@tensorflow/tfjs'

export default {
	incrementAsync({ commit }) {
		setTimeout(() => {
			commit('increment')
		}, 1000)
	},
	addLayers({commit, state}) {
		for (let layer of state.config.layers) {
			const tfLayer = tf.layers.dense(layer.params)
			commit('addLayer', tfLayer)
		}
	},
	compileModel({commit, state}) {
		state.model.model.compile({
			optimizer: tf.train.sgd(0.1),
			loss: 'meanSquaredError'
		})
		commit('setCompileStatus', true)
	},
	async train({ commit, dispatch, state }) {
		const history = await state.model.model.fit(
			state.model.trainingSet.xs_tensor,
			state.model.trainingSet.ys_tensor,
			{
				batchSize: 10,
				epochs: 3
			}
		)
		commit('increment')
		commit('setHistory', history)
		if (state.loop) dispatch('train')
	},
	async predict({ commit, dispatch, state }) {
		const prediction = await state.model.model.predict(tf.tensor2d(state.inputs2D)).data()
		commit('setCurrentPrediction', prediction)
		if (state.loop) dispatch('predict')
	},
}
