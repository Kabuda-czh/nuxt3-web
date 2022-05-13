<template>
  <div class="">
    <div>获取到的ID: {{ id }}</div>
    <div>获取到的Name: {{ name }}</div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const id = ref(route.params.id);
const name = ref(route.params.name);
</script>

<style scoped></style>
