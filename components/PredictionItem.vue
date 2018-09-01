<template>
	<div class="item" :style="{left, top, width}">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: [
			'left',
			'top',
			'width'
		]
	}
</script>


<style scoped>
	.item {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.content {
	}
</style>
