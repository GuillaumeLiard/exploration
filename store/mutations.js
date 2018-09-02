import * as tf from '@tensorflow/tfjs'

export default {
	addHiddenLayer(state, payload) {
		state.model.layers.hiddenLayer = payload
		return state
	},
	// addLayer(state, payload) {
	// 	console.log('abc')
	// 	// state.model.layers.hiddenLayer = payload
	// 	return state
	// },
	setCurrentPrediction(state, payload) {
		state.model.prediction = payload
		return state
	},
	setHistory(state, payload) {
		state.model.history = payload
		return state
	},
	createModel(state, payload) {
		state.model.model = payload
		return state
	},
	increment(state) {
		state.counter++
	},
	addLayer(state, payload) {
		console.log('payload', payload)
		state.model.model.add(payload)
		return state
	},
	setCompileStatus(state, payload) {
		state.model.compiled = payload
	}
}
