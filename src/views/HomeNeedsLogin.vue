<template>
  <div class="home">
    <v-toolbar color="primary" dark>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>vue-sync-chatboard-sample
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn rounded color="primary" dark @click="signUp">Twitter連携</v-btn>
        </v-toolbar>
    <div>コメントを追加するにはTwitter連携が必要です。</div>
    <ChatBoard/>
  </div>
</template>

<script>
import firebase from 'firebase'
import ChatBoard from '@/components/ChatBoard'
import {providerTwitter} from "../plugins/firebase"
export default {
  name: 'Home',
  components: {
    ChatBoard
  },
  created(){
  },
  data(){
    return {
      firebase: firebase
    }
  },
  methods: {
      signUp: function() {
      firebase
        .auth()
        .signInWithPopup(providerTwitter)
        .then(() => {
          this.$router.push('/')
        })
        .catch(error => {
          alert(error.message);
        });
    }
  }
}
</script>

<style scoped>
.header{
  width: 100%;
  background-color:#3EBD98;
}
.logout{
  margin-left: 85%;
  color: lightblue;
}
</style>>