<template>
  <div>Home how
    <div>{{$route.path}}</div>
    <v-btn color="info" @click="downloadNewestGameVersion">Download</v-btn>
    <v-btn color="info" @click="startGame">Start</v-btn>
    Is game Running: {{getIsGameRunning}}
  </div>
</template>
<script src="./PageHome.component.js"></script>
<style src="./PageHome.component.css" lang="css"></style>