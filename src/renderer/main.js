import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import axios from 'axios'
import firebase from 'firebase'

import App from './App'
import router from './router'
import store from './store'
//import { firebaseConfig } from '../../config/config'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.use(Vuetify)
Vue.http = Vue.prototype.$http = axios
//Vue.prototype.$firebase = firebase.initializeApp(firebaseConfig)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
