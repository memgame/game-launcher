import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'page-login',
  components: {},
  props: [],
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        hasNumber: v => this.hasNumber(v) || 'Needs at least one Number',
        emailMatch: () => ('The email and password you entered don\'t match')
      }
    }
  },
  computed: {
    ...mapGetters(['getIsLoginInProgress']),
    ...mapState(['User'])
  },
  mounted() {

  },
  methods: {
    ...mapActions(['signIn', 'signUp']),
    trySignUp() {
      this.signUp({
        email: this.email,
        password: this.password
      })
    },
    trySignIn() {
      this.signIn({
        email: this.email,
        password: this.password
      })
    },
    hasNumber(myString) {
      return /\d/.test(myString);
    }
  },
  watch: {
    'User.isAnonymous'(val) {
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