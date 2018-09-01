<template>
	<div class="inputs">
		<div v-for="(input, key) in inputs" :key="key">
			{{input}}
		</div>
	</div>
</template>
<script>
	export default {
		data: function() {
			return {
				inputs: [
					`
					For :
						A = true
						B = false
					`,
					`
					For :
						A = true
						B = true
					`,
					`
					For :
						A = false
						B = true
					`,
					`
					For :
						A = false
						B = false
					`
				]
			}
		}
	}
</script>
