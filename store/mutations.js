const mutations = {
  addHiddenLayer(state, payload) {
		console.log(state)
		console.log(payload)
    state.model.layers.hiddenLayer = payload
		return state
  },
	setCurrentPrediction(state, payload) {
		console.log(state)
		console.log(payload)
    state.model.prediction = payload
		return state
  }
}

export default mutations
