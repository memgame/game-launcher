<template>
    <div>
        <v-layout>
            <v-flex xs12 sm6 md3>
                <v-text-field
                    label="Email"
                    v-model="email"
                ></v-text-field>
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
            </v-flex>
        </v-layout>
        <v-btn color="info" @click="trySignIn">Sign In</v-btn>
        <v-btn color="error" @click="trySignUp">Sign Up</v-btn>
        <div>{{$route.path}}</div>
    </div>
</template>
<script src="./PageLogin.component.js"></script>
<style src="./PageLogin.component.css" lang="css"></style>