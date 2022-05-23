<template>
  <div class="blog">
    <div class="blog_left">
      <v-card
        class="mx-auto"
        variant="outlined"
        v-for="(item, index) in data"
        :key="index"
        :to="`/blogs/${item.id}`"
      >
        <div class="d-flex flex-no-wrap">
          <v-avatar class="ma-3" size="125" rounded="0">
            <v-img :src="item.cover"> </v-img>
          </v-avatar>
          <v-card-header>
            <div>
              <div class="text-overline mb-1">{{ item.title }}</div>
              <div class="text-h6 mb-1">{{ item.introduce }}</div>
              <div class="text-caption d-flex">
                <div class="d-flex">
                  <p>博客标签:</p>
                  {{ item.tag.name }}
                </div>
                <div>{{ item.create_at }}</div>
              </div>
            </div>
          </v-card-header>
        </div>
      </v-card>
    </div>
    <div class="blog_right"></div>
  </div>
</template>

<script lang="ts" setup>
import { findAll } from "~~/service/blogs";

interface IData {
  id: string;
  cover: string;
  title: string;
  introduce: string;
  tag: {
    name: string;
  };
  create_at: string;
}

const resData = await useAsyncData("blogs", async () => await findAll());

const data: IData[] = (resData.data as unknown) as IData[];

// const data = reactive([
//   {
//     id: 1,
//     cover: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
//     title: "测试博客标题",
//     introduce: "测试博客描述",
//     tag: {
//       name: "vue",
//     },
//     create_at: "2022-05-23T15:55:01.055Z",
//   },
// ]);
</script>

<style lang="scss">
.blog {
  display: flex;
  justify-content: space-between;
  .blog_left {
    flex: 0 0 65%;
  }
}
</style>
