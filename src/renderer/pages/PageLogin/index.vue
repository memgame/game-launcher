<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex xs9 class="background">
      <!--
      <v-img src="'~@/assets/backgroundXayah.jpg'" aspect-ratio="1.7"></v-img>
      <img class="background" src="~@/assets/backgroundXayah.jpg" alt="Xayah">
      -->
    </v-flex>
    <v-flex xs3 text-xs-center fill-height>
      <v-container align-center justify-space-around column fill-height>
        <v-layout align-center justify-space-around column fill-height>
          <v-flex xs1>
            <p class="headline">Shadow of Life</p>
          </v-flex>
          <v-flex xs10>
            <div v-if="!User.isLoginInProgress">
              <v-text-field label="Email" v-model="email"></v-text-field>
              <v-text-field
                label="Password"
                v-model="password"
                :append-icon="showPassword ? 'visibility_off' : 'visibility'"
                :rules="[rules.required, rules.min, rules.hasNumber]"
                :type="showPassword ? 'text' : 'password'"
                hint="At least 8 characters and a mix of letters and numbers"
                counter
                @click:append="showPassword = !showPassword"
              ></v-text-field>
              <v-btn color="info" @click="trySignIn">Sign In</v-btn>
              <v-btn color="error" @click="trySignUp">Sign Up</v-btn>
            </div>
            <div v-if="User.isLoginInProgress">
              <v-icon class="custom-loader">cached</v-icon>
            </div>
          </v-flex>
          <v-flex xs1></v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>
<script src="./PageLogin.component.js"></script>
<style src="./PageLogin.component.css" lang="css" scoped></style>