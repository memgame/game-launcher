import firebase from 'firebase/app'
import config from './../../config/config'

export default async ({ Vue }) => {
    Vue.prototype.$firebase = firebase.initializeApp(config.firebase)
}