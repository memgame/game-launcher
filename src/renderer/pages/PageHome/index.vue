<template>
  <div>Home how
    <v-layout row wrap>
      <v-flex xs9>
        <div>{{$route.path}}</div>
        Is game Running: {{getIsGameRunning}}
      </v-flex>
      <v-flex xs3>
        <flag/>
      </v-flex>
    </v-layout>
  </div>
</template>
<script src="./PageHome.component.js"></script>
<style src="./PageHome.component.css" lang="css"></style>