import * as tf from '@tensorflow/tfjs'

export default {
	incrementAsync({ commit }) {
		setTimeout(() => {
			commit('increment')
		}, 1000)
	},
	compileModel({commit, state}) {
		state.model.model.compile({
			optimizer: tf.train.sgd(0.1),
			loss: 'meanSquaredError'
		})
		commit('setCompileStatus', true)
	},
	async train({ commit, state }) {
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
	},
	async trainLoop({ commit, dispatch, state }) {
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
		dispatch('trainLoop')
	},
	async predict({ commit, state }) {
		const prediction = await state.model.model.predict(tf.tensor2d(state.inputs2D)).data()
		commit('setCurrentPrediction', prediction)
	},
	async predictLoop({ commit, dispatch, state }) {
		const prediction = await state.model.model.predict(tf.tensor2d(state.inputs2D)).data()
		commit('setCurrentPrediction', prediction)
		dispatch('predictLoop')
	},
}
