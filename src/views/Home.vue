<template>
  <div class="home">
    <div class="header">
      ようこそ、{{firebase.auth().currentUser.email}}さん
      <SignOut class="logout"/>
    </div>
    <ChatBoard/>
    <ChatForm/>
  </div>
</template>

<script>
import firebase from 'firebase'
import SignOut from '@/components/SignOut'
import ChatBoard from '@/components/ChatBoard'
import ChatForm from '@/components/Form'
export default {
  name: 'Home',
  components: {
    SignOut,
    ChatBoard,
    ChatForm
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
