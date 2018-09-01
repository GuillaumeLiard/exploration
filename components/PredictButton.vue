<template>
	<button class="prediction__button">
		predict
		<!-- <input name="always" type="checkbox" :checked="always" @input="triggerEvent"/> -->
		<!-- <label for="always">(always)</label> -->
	</button>
</template>

<script>
export default {
	// props: {
	//   value: Boolean
	// },
	props: {
		click: function
	},
	data: function() {
		return {
			always: true
		}
	},

	methods: {
		click(event) {
			this.$emit('click',this.click)
		}
		// click(event) {
		//   this.$emit('always', event.target.value);
		// }
	}
}
</script>
