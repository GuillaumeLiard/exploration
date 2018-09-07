export default {
	getHistoryLength: (state) => {
		console.log(state.model.combinedHistory)
		return state.model.combinedHistory ? state.model.combinedHistory.length : 0
	}
}
