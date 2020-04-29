import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import _env from '../config/env.js'

Vue.config.productionTip = false

// Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyCEx4xngnWE-7rlv69EmJZNMvzsVufF2qM",
//   authDomain: "my-first-firebase-25414.firebaseapp.com",
//   databaseURL: "https://my-first-firebase-25414.firebaseio.com",
//   projectId: "my-first-firebase-25414",
//   storageBucket: "my-first-firebase-25414.appspot.com",
//   messagingSenderId: "224257231072",
//   appId: "1:224257231072:web:43d9c40cd98007f589a885",
//   measurementId: "G-PYEC2GEKWE"
// };
// Initialize Firebase
firebase.initializeApp(_env.firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
