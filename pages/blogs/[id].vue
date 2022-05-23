<template>
  <div class="BlogById">
    <div class="BlogByIdLeft"></div>
    <div class="BlogByIdContent"></div>
    <div class="BlogByIdRight"></div>
  </div>
</template>

<script setup lang="ts">
import { findById } from "~~/service/blogs";

const route = useRoute();

const { data } = await useAsyncData(
  "blogid",
  async () => await findById(String(route.params.id))
);

console.log(data)
</script>

<style lang="scss" scoped>
.BlogById {
  width: 80%;
  min-height: 200px;
  margin: 20px auto;
  display: flex;
  gap: 30px;
  .BlogByIdLeft {
    flex: 0 0 20%;
    border: 1px #ccc solid;
  }
  .BlogByIdContent {
    flex: 0 0 60%;
    border: 1px #ccc solid;
  }
  .BlogByIdRight {
    flex: 0 0 20%;
    border: 1px #ccc solid;
  }
}
</style>
