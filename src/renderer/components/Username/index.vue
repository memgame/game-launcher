<template>
    <div class="username-container">
        <div v-if="!isInEditModus">
            <p class="text-xs-center title">
                {{getDisplayName}}
                <v-btn flat icon color="blue lighten-2" @click="openEditModus">
                    <v-icon>edit</v-icon>
                </v-btn>
            </p>
        </div>
        <div v-if="isInEditModus">
            <v-layout align-center justify-center row fill-height>
                <v-flex xs10>
                    <v-text-field
                        label="Display Name"
                        v-model="newDisplayName"
                    ></v-text-field>
                </v-flex>
                <v-flex xs1>
                    <v-btn flat icon color="green lighten-1" @click="tryChangeDisplayName">
                        <v-icon>check</v-icon>
                    </v-btn>
                </v-flex>
                <v-flex xs1>
                    <v-btn flat icon color="blue lighten-2" @click="closeEditModus">
                        <v-icon>close</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
                
        </div>
    </div>
</template>
<script src="./Username.component.js"></script>
<style src="./Username.component.css" lang="css" scoped></style>