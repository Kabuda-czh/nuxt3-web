<template>
  <div class="">
    <v-list style="width: 300px">
      <v-list-item
        prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
        title="KBD博客"
        subtitle="634469564@qq.com"
      >
        <template v-slot:append>
          <v-list-item-avatar end></v-list-item-avatar>
        </template>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list nav dense>
      <v-list-subheader>菜单</v-list-subheader>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        active-color="primary"
        :to="item.to"
      >
        <v-list-item-avatar>
          <v-icon :icon="item.icon"></v-icon>
        </v-list-item-avatar>

        <v-list-item-title
          style="margin-left: 20px"
          v-text="item.text"
        ></v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup lang="ts">
const items = ref([
  { text: "首页", icon: "mdi-folder", to: "/" },
  { text: "博客", icon: "mdi-account-multiple", to: "/blogs" },
  { text: "友链", icon: "mdi-star", to: "/links" },
  { text: "日志", icon: "mdi-history", to: "/logs" },
]);
// import { ref } from "vue";
// const selectedItem = ref<number>(0);
</script>
