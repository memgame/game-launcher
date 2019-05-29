import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBjLeNuaiLRCjYAehwq6sJKSCMxM312VIA",
  authDomain: "game-launcher-1439e.firebaseapp.com",
  databaseURL: "https://game-launcher-1439e.firebaseio.com",
  projectId: "game-launcher-1439e",
  storageBucket: "game-launcher-1439e.appspot.com",
  messagingSenderId: "148629216769"
}

export default async ({ Vue }) => {
    console.log('firebase init')
    Vue.prototype.$firebase = firebase.initializeApp(firebaseConfig)
}