export default  {
	counter: 0,
	train: {
		mode: 'manual'
	},
	loop: true,
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
		]
	},
	model: {
		compiled: false,
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
}
