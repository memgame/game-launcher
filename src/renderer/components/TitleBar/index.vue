<template>
  <v-toolbar id="app-title-bar" height="40" app fixed clipped-left>
    <v-btn icon class="app-title-bar-btn" @click="startGame" v-if="$route.path != '/login'">
      <v-icon>play_arrow</v-icon>
    </v-btn>
    <v-spacer></v-spacer>

    <v-btn icon class="app-title-bar-btn" @click="minimize">
      <v-icon>remove</v-icon>
    </v-btn>
    <v-btn icon class="app-title-bar-btn" @click="close">
      <v-icon>close</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script src="./TitleBar.component.js"></script>
<style src="./TitleBar.component.css" lang="css" scoped></style>