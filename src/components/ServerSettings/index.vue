<template>
    <div>
        <q-input label="Server Ip" v-model="serverIp" dark></q-input>
        <q-input label="Port" v-model="port" dark></q-input>
        <q-input label="Room Name" v-model="roomName" dark></q-input>
        <q-btn small color="error" @click="resetServerSettings" dark>Reset settings</q-btn>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  name: 'server-settings',
  computed: {
      serverIp: {
          get () {
              return this.$store.state.ServerSettings.serverIp
          },
          set (value) {
              this.$store.commit('updateServerIp', value)
          }
      },
      port: {
        get () {
            return this.$store.state.ServerSettings.port
        },
        set (value) {
            this.$store.commit('updatePort', value)
        }          
      },
      roomName: {
        get () {
            return this.$store.state.ServerSettings.roomName
        },
        set (value) {
            this.$store.commit('updateRoomName', value)
        }          
      }
  },
  methods: {
      ...mapMutations(['resetServerSettings'])
  }
}
</script>
<style lang="stylus" scoped></style>