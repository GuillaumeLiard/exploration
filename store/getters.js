export default {
	getFullHistoryLength: (state) => {
		return state.model.fullHistory ? state.model.fullHistory.length : 0
	},
	getLastLossValue: (state) => {
		return state.model.history ? state.model.history.history.loss[0] : -1
	},
	getLastLossValueHuman: (state, getters) => {
		return getters.getLastLossValue.toFixed(2)
	}
}
