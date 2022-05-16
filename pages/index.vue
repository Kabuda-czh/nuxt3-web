<template>
  <div>
    <v-card class="mx-auto" max-width="300">
      <v-list disabled>
        <v-list-subheader>REPORTS</v-list-subheader>
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-avatar start>
            <v-icon :icon="item.icon"></v-icon>
          </v-list-item-avatar>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script setup lang="ts" >
const selectedItem = ref(1);
const items = ref([
  { text: "Real-Time", icon: "mdi-clock" },
  { text: "Audience", icon: "mdi-account" },
  { text: "Conversions", icon: "mdi-flag" },
]);
</script>
