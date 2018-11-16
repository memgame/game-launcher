import { mapState, mapActions } from 'vuex'

export default {
  name: 'page-login',
  components: { },
  props: [],
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['User'])
  },
  mounted () {
      
  },
  methods: {
    ...mapActions(['login']),
    loginn () {
      this.login()
    }
  },
  watch: {
    'User.isAnonymous' (val) {
      if (!val) {
        if (this.$router.currentRoute.query.redirect) {
          this.$router.push(this.$router.currentRoute.query.redirect)
        } else {
          this.$router.push('/')
        }
      }
    }
  }
}