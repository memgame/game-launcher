import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'navigation-side',
  components: { },
  props: [],
  data () {
    return {
      drawer: true,
      items: [
        {
          title: '',
          icon: 'menu',
          click: this.toggleIsMini
        },
        {
          title: 'Home',
          icon: 'home',
          click: () => this.$router.push('home')
        },
        { 
          title: 'Store',
          icon: 'store',
          click: () => this.$router.push('store')
        },
        { 
          title: 'Settings',
          icon: 'settings',
          click: () => this.$router.push('settings')
        },
        {
          title: 'Logout',
          icon: 'highlight_off',
          click: () => this.$router.push('logout')
        },
        {
          title: 'Download',
          icon: 'cloud_download',
          click: () => {}
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['getIsMini'])
  },
  mounted () {
      
  },
  methods: {
    ...mapActions(['toggleIsMini'])
  }
}