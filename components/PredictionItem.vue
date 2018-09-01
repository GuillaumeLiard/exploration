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
		],
		data: function() {
			return {
				// left: '50%',
				// width: '50px'
			}
		}
	}
</script>


<style scoped>
	.item {
		/*position: absolute;
		width: 100%;
		height: 0;
		padding-top: 100%;
		max-width: 300px;*/
		/*left: this.left;*/
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.content {
		/*position: absolute;
		width: 100%;
		height: 100%;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);*/
	}
</style>
