export default {
	getFullHistoryLength: (state) => {
		return state.model.fullHistory ? state.model.fullHistory.length : 0
	}
}
