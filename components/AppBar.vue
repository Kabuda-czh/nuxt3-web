<template>
  <div class="appbar">
    <div style="width: 300px">
      <v-text-field
        density="compact"
        label="搜索"
        placeholder="搜索"
        variant="outlined"
      ></v-text-field>
    </div>

    <div class="login" v-if="true">
      <div>登录</div>
      <div>注册</div>
    </div>

    <div class="isLogin" v-else>
      <v-menu transition="slide-x-transition">
        <template v-slot:activator="{ props }">
          <v-avatar>
            <v-img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
              v-bind="props"
            ></v-img>
          </v-avatar>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>xxx</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.appbar {
  height: 120%;
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .login {
    align-items: center;
    display: flex;
    gap: 20px;
  }
}
</style>
