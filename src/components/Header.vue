<template>
<v-toolbar color="primary" dark>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>ようこそ、{{this.$store.state.user_name}}さん
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn color="primary" dark rounded @click="signOut">ログアウト
          </v-btn>
          <v-avatar>
      <img
        :src="this.$store.state.profile_image_url"
        :alt="this.$store.state.user_name"
      >
    </v-avatar>
        </v-toolbar>
</template>

<script>
import firebase from "firebase"
export default {
  name: "Header",
  data() {
    return {
    };
  },
  methods: {
    signOut: function(){
      firebase.auth().signOut()
      this.$router.push("/signUp");
    }
  }
};
</script>

<style scoped>
</style>