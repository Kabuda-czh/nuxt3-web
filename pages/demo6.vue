<template>
  <div class="">
    <ul v-for="data in list" :key="data.id">
      <li>{{ data.title }}</li>
      <li>{{ data.introduce_html }}</li>
      <p>---------------------------------</p>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {} from "vue";

interface IResData {
  data: {
    status: number;
    success: boolean;
    message: string;
    data: IData[];
  };
}

interface IData {
  id: number;
  title: string;
  introduce_html: string;
  typeName: string;
  isTop: number;
  part_count: number;
  view_count: number;
  addTime: string;
}

const url = "http://121.36.81.61:8000/getTenArticleList";
// const res = await useAsyncData("getList", () => $fetch(url));
const res = await useFetch(url); // 等同于上面的方法
// const res = await useFetch(url, {method: "GET"}) // 等同于上面的方法
const list: IData[] = ref(((res as unknown) as IResData).data).value["data"];
// nuxt3 原生提供 4种方法去获取api数据
// 1. useAsyncData      常用    -> 其中自带lazy选项 默认false
// 2. useFetch          常用    -> 如果 asyncdata中的option设置全默认的话就使用这个
// 3. useLazyFetch
// 4. useLazyAsyncData
</script>

<style scoped></style>
