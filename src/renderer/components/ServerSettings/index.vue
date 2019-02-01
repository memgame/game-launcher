<template>
    <div>
        <v-text-field label="Server Ip" v-model="serverIp"></v-text-field>
        <v-text-field label="Port" v-model="port"></v-text-field>
        <v-text-field label="Room Name" v-model="roomName"></v-text-field>
        <v-btn small color="error" @click="resetServerSettings">Reset settings</v-btn>
    </div>
</template>
<script src="./ServerSettings.component.js"></script>
<style src="./ServerSettings.component.css" lang="css" scoped></style>