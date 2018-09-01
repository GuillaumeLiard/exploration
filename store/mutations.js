export default {
	addHiddenLayer(state, payload) {
		state.model.layers.hiddenLayer = payload
		return state
	},
	setCurrentPrediction(state, payload) {
		state.model.prediction = payload
		return state
	},
	setHistory(state, payload) {
		state.model.history = payload
		return state
	}
}
