import { mapMutations } from 'vuex'

export default {
  name: 'server-settings',
  components: { },
  props: [],
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
  mounted() {

  },
  methods: {
      ...mapMutations(['resetServerSettings'])
  }
}