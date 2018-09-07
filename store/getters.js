export default {
	getFullHistoryLength: (state) => {
		console.log(state.model.fullHistory)
		return state.model.fullHistory ? state.model.fullHistory.length : 0
	}
}
