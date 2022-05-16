<template>
  <div>
    <v-app>
      <v-navigation-drawer app>
        <slot name="drawer" />
      </v-navigation-drawer>
      <v-app-bar app>
        <slot name="appbar" />
      </v-app-bar>
      <v-main>
        <v-container fluid>
          <slot />
        </v-container>
      </v-main>
      <v-footer app>
        <!--  -->
      </v-footer>
    </v-app>
  </div>
</template>
