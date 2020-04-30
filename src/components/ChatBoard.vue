<template>
  <v-list three-line>
    <template v-for="(comment, index) in comments">
      <v-list-item
          :key="index"
      >

        <v-list-item-content>
          <v-list-item-subtitle v-if="comment.user==firebase.auth().currentUser.email" class="text--primary subheading">あなた：{{comment.content}}</v-list-item-subtitle>
          <v-list-item-subtitle v-else class="text--primary subheading">{{comment.content}}</v-list-item-subtitle>
          <v-list-item-subtitle>
            {{comment.createdAt.toDate().toLocaleString()}}
            ＜{{comment.user}}＞
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
        </v-list-item-action>
      </v-list-item>
      <v-divider :key="comment.id"></v-divider>
    </template>
  </v-list>
</template>

<script>
  import {db} from '../plugins/firebase';
  import firebase from "firebase"

  export default {
    name: "ChatBoard",
    data: () => ({
      comments: [],
      firebase: firebase
    }),
    firestore() {
      return {
        // firestoreのcommentsコレクションを参照
        comments: db.collection('comments').orderBy('createdAt')

      }
    },
  }
</script>