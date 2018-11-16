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
          icon: 'dashboard',
          click: () => {}
        },
        { 
          title: 'About',
          icon: 'question_answer',
          click: () => {}
        },
        {
          title: 'Logout',
          icon: 'highlight_off',
          click: () => {
            console.log(this.$router.push('logout'))
          }
        }
      ],
      mini: true,
      right: null
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