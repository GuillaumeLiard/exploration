import Vuex from 'vuex'
import mutations from './mutations'

const createStore = () => {
	return new Vuex.Store({
		state: {
			model: {
				model: null,
				layers: {
					hiddenLayer: null,
					outputLayer: null
				},
				// inputs: null,
				prediction: null,
				history: null,

				// function OR
				trainingSet: {
					// [A, B]
					xs: [
						[0, 0],
						[0, 1],
						[1, 0],
						[1, 1]
					],
					// [expected probability of A OR B
					ys: [
						[0],
						[1],
						[1],
						[1]
					],
					xs_tensor: null,
					ys_tensor: null
				}
			},
			inputs2D: [
				[1, 0],
				[1, 1],
				[0, 1],
				[0, 0],
			]
		},
		mutations
	})
}

export default createStore
