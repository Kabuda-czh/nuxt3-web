<template>
  <div>
    <div>
      <v-carousel cycle height="540" hide-delimiters show-arrows="hover">
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">{{ slide }} Slide</div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="index_footers">
      <div class="index_footers_left">
        <h4>模块数据</h4>
        <div>
          <h4>11291</h4>
          <p>总访问量</p>
        </div>
        <div>
          <h4>25</h4>
          <p>今日访问量</p>
        </div>
      </div>
      <div class="index_footers_right">
        <IndexBox />
        <IndexBox />
        <IndexBox />
        <IndexBox />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const colors = ref([
  "indigo",
  "warning",
  "pink darken-2",
  "red lighten-1",
  "deep-purple accent-4",
]);

const slides = ref(["First", "Second", "Third", "Fourth", "Fifth"]);
</script>

<style scoped lang="scss">
.index_footers {
  width: 100%;
  display: flex;
  height: auto;
  .index_footers_left {
    flex: 0 0 25%;
    display: flex;
    padding-top: 20px;
    flex-direction: column;
    gap: 15px;
    h4 {
      font-size: 30px;
    }
    p {
      font-size: 14px;
    }
  }

  .index_footers_right {
    display: flex;
    flex: 1;
    padding-top: 20px;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
