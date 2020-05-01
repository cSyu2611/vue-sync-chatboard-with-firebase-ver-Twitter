<template>
  <!-- 投稿されたコメントのリスト -->
  <v-list three-line>
    <!-- コメントの数だけtemplateをv-forで回す -->
    <template v-for="(comment, index) in comments">
      <!-- 本文や日付、ユーザ名のブロック -->
      <v-list-item
          :key="index"
      >
        <v-list-item-content>
          <!-- コメント本文、投稿者が自分なら「あなた：」から始める -->
          <v-list-item-subtitle class="text--primary subheading"><div v-if="comment.user==firebase.auth().currentUser.email" class="my_text">あなた</div>：{{comment.content}}</v-list-item-subtitle>
          <!-- 日付とユーザのメールアドレス -->
          <v-list-item-subtitle>
            {{comment.createdAt.toDate().toLocaleString()}}
            ＜{{comment.user}}＞
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <!-- 分割するための線 -->
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

<style>
.my_text{
  font-weight: bold;
}
</style>