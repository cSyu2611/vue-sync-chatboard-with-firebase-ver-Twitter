import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import _env from '../config/env.js'

Vue.config.productionTip = false

firebase.initializeApp(_env.firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
