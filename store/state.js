export default  {
	counter: 0,
	train: {
		mode: 'manual'
	},
	loop: false,
	config: {
		layers: [
			{
				type: 'dense',
				params: {
					units: 1,
					inputShape: [2],
					activation: 'sigmoid'
				}
			},
			{
				type: 'dense',
				params: {
					units: 1,
					activation: 'sigmoid'
				}
			}
		],
		optimizer: {
			type: 'sgd',
			params: {
				rate: 0.1
			}
		},
		loss: 'meanSquaredError',
		training: {
			params: {
				batchSize: 10,
				epochs: 1
			}
		}
	},
	model: {
		compiled: false,
		model: null,
		layers: [],
		// inputs: null,
		prediction: null,
		weights: null,
		history: null,
		combinedHistory: [],
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
}
