<template>
	<form>
		<input v-model="loop" name="shouldLoop" type="checkbox">
		<label for="shouldLoop">loop</label>
	</form>
</template>
<script>
	export default {
		data: function() {
			return {
				loop: false
			}
		},
		mounted: function() {
			this.loop = this.$store.state.loop
		},
		watch: {
			loop: function(newValue ) {
				this.$store.commit('setLoop', newValue)
			}
		}
	}
</script>
