<template>
  <NuxtLayout name="default">
    <template #one>
      <div class="">
        <div><h1>Index Page</h1></div>
        <div>
          <NuxtLink to="/demo1">Demo1 Page</NuxtLink> <br />
          <NuxtLink to="/demo3">Demo3 Page</NuxtLink> <br />
          <NuxtLink to="/demo4">Demo4 Page</NuxtLink> <br />
          <NuxtLink to="/demo5">Demo5 Page</NuxtLink> <br />
          <NuxtLink to="/demo6">Demo6 Page</NuxtLink> <br />
          <NuxtLink to="/demo7">Demo7 Page</NuxtLink> <br />
          <NuxtLink to="/goods-testGoods/demo2-10086">Demo2 Page</NuxtLink> <br />
          <NuxtLink to="/parent/child">/parent/child</NuxtLink> <br />
          <NuxtLink to="/parent/two">/parent/two</NuxtLink>
        </div>
      </div>
    </template>
    <template #two>
      <div>我是two中的内容</div>
      <TheFooter />
      <TestMyButton />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import {} from "vue";
</script>

<style scoped></style>
