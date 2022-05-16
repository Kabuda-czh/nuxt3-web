<template>
  <div>
    <NuxtLayout name="home">
      <template #drawer>
        <Drawer />
      </template>
      <template #appbar>
        <AppBar />
      </template>
      <NuxtChild />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts"></script>
