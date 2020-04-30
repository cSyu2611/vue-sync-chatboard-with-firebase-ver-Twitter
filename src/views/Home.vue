<template>
  <div class="home">
    ホーム画面
    <p>ようこそ、{{firebase.auth().currentUser.email}}さん</p>
    <SignOut/>
  </div>
</template>

<script>
import firebase from 'firebase'
import SignOut from '@/components/SignOut'
export default {
  name: 'Home',
  components: {
    SignOut
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
