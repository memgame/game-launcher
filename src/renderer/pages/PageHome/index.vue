<template>
  <v-layout row wrap justify-space-around>
    <v-flex xs9>
      <v-container>
        <Username/>
        <v-layout align-center justify-center row fill-height>
          <v-flex xs1>
              <div class="text-xs-center title">10</div>
          </v-flex>
          <v-flex xs10>
            <v-progress-linear v-model="valueDeterminate" class="level-progress"></v-progress-linear>
          </v-flex>
          <v-flex xs1>
              <div class="text-xs-center title">11</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
    <v-flex xs3>
      <v-container>
        <v-layout align-center justify-center row fill-height>
          <v-flex xs12>
            <flag/>
          </v-flex>
        </v-layout>
        <v-layout align-center justify-center row fill-height>
          <v-flex xs12 text-xs-center>
            <v-btn flat small>Edit</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>
<script src="./PageHome.component.js"></script>
<style src="./PageHome.component.css" lang="css" scoped></style>