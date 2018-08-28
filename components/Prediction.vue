<template>
	<div class="prediction">
		A OR B is true at : {{this.$store.state.model.prediction ? this.$store.state.model.prediction[0] : ''}} %
	</div>
</template>
