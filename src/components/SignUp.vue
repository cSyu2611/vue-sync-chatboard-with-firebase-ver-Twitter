<template>
  <div class="signup">
      <div id="nav">
        <router-link to="/signIn">ログイン</router-link> | 
        <router-link to="/signUp">アカウント作成</router-link>
    </div>
    <h2>Gmailでアカウント登録</h2>
    <input type="text" placeholder="example@gmail.com" v-model="username" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="signUp">アカウント登録</button>
    <p>
      すでにアカウントをお持ちの方は
      <router-link to="/signIn">こちら</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Signup",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.username, this.password)
        .then(user => {
          alert("Create account: ", user.email);
        })
        .catch(error => {
          alert(error.message);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signup {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
