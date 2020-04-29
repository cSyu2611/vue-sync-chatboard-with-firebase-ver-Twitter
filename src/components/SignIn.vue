<template>
  <div class="signin">
      <div id="nav">
        <router-link to="/signIn">ログイン</router-link> | 
        <router-link to="/signUp">アカウント作成</router-link>
    </div>
    <h2>ログイン</h2>
    <input type="text" placeholder="example@gmail.com" v-model="username" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="signIn">ログイン</button>
    <p>
      アカウント登録がお済みでない方は
      <router-link to="/signUp">こちら</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "SignIn",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then(
          () => {
            alert("Success!");
            this.$router.push("/");
          },
          err => {
            alert(err.message);
          }
        );
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
.signin {
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
