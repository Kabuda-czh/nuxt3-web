<template>
  <div class="">
    <lazyText v-if="show" />
  </div>
</template>

<script setup lang="ts">
const show = ref(false)
setTimeout(() => {
  show.value = true
}, 2000)
</script>

<style scoped></style>