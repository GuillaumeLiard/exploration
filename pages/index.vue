<template>
  <section class="container">
		<Model />
  </section>
</template>

<script>
import Model from '~/components/Model.vue'

export default {
  components: {
		Model
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
