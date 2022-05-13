<template>
  <div class="">{{ time }}</div>
</template>

<script setup lang="ts">
import {} from "vue";
const time = ref(getTime());
testIndex()
test();
setInterval(() => {
  time.value = getTime();
}, 1000);
</script>

<style scoped></style>
