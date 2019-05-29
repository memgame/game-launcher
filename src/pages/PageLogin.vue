<template>
  <q-page class="row">
    <div class="row col-xs-12">
      <div class="col-xs-9 background">
      </div>
      <div class="col-xs-3 text-center">
        <div class="text-h5 q-pa-md">Last Faith</div>
        <div class="q-pa-md" v-if="!User.isLoginInProgress">
          <div class="text-weight-re text-red-10">{{User.loginError}}</div>
          <q-input
            dark
            v-model="email"
            label="E-Mail" />
          <q-input
            dark
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            hint="At least 8 characters and a mix of letters and numbers"
            counter
            :rules="[rules.required, rules.min, rules.hasNumber]"
            label="Password">
            <template v-slot:append>
              <q-icon
                :name="showPassword ? 'visibility' : 'visibility_off'"
                class="cursor-pointer"
                @click="showPassword = !showPassword"
              />
            </template>
          </q-input>
          <div class="q-pt-md q-pb-xs">
            <q-btn @click="trySignIn" color="primary" label="Sign In" unelevated />
          </div>
          <div class="q-pt-xs q-pb-md">
            <q-btn @click="trySignUp" color="negative" label="Sign Up" flat />
          </div>
        </div>
        <div class="q-pa-md" v-if="User.isLoginInProgress">
          <q-spinner-puff
            color="primary"
            size="2em"
          />
        </div>

      </div>
    </div>
    
  </q-page>
</template>

<script>
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
</script>

<style lang="stylus" scoped>
.background {
  background-image: url("~assets//backgroundXayah.jpg");
  background-position-x: -100px;
  background-size: cover; 
  box-shadow: 2px 0px 5px 0px rgba(0,0,0,0.75);
  animation: backgroundAnim 5s linear infinite;
}
@keyframes backgroundAnim {
    0% {
        filter: contrast(107%) saturate(105%) hue-rotate(0deg);
    }
    50% {
        filter: contrast(120%) saturate(105%) hue-rotate(5deg);
    }
    100% {
        filter: contrast(107%) saturate(105%) hue-rotate(0deg);
    }
}
</style>
