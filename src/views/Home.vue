<template>
  <div class="home">
    <Header/>
    <ChatBoard/>
    <ChatForm/>
  </div>
</template>

<script>
import firebase from 'firebase'
import Header from '@/components/Header'
import ChatBoard from '@/components/ChatBoard'
import ChatForm from '@/components/Form'
export default {
  name: 'Home',
  components: {
    Header,
    ChatBoard,
    ChatForm
  },
  created(){
    const obj = {
      profile:{

      }
    };
    obj.profile.name = firebase.auth().currentUser.providerData[0].displayName
    obj.profile.profile_image_url = firebase.auth().currentUser.providerData[0].photoURL
    this.$store.commit("setCredential", obj)
  },
  data(){
    return {
      firebase: firebase
    }
  },
  methods: {
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
