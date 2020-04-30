import Vue from 'vue'
import {firestorePlugin} from 'vuefire'
import firebase from 'firebase';
import 'firebase/firestore';
import env_ from '../../config/env.js'

Vue.use(firestorePlugin)

var firebaseApp = firebase.initializeApp(env_.firebaseConfig);
export const db = firebaseApp.firestore();