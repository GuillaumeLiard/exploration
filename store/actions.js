import * as tf from '@tensorflow/tfjs'

export default {
	addLayers({commit, state}) {
		for (let layer of state.config.layers) {
			const tfLayer = tf.layers.dense(layer.params)
			commit('addLayer', tfLayer)
		}
	},
	compileModel({commit, state}) {
		state.model.model.compile({
			optimizer: (state.config.optimizer.type === 'sgd') ? tf.train.sgd(state.config.optimizer.params.rate) : '',
			loss: state.config.loss
		})
		commit('setCompileStatus', true)
	},
	async train({ commit, dispatch, state }) {
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
		const prediction = await state.model.model.predict(tf.tensor2d(state.inputs2D)).data()
		commit('setCurrentPrediction', prediction)
		if (state.loop) dispatch('predict')
	},
}
