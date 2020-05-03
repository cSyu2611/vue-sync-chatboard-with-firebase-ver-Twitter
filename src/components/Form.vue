<template>
  <div>
    <!--フォームの表示ボタン-->
    <!-- <v-btn
        color="blue"
        dark
        center
        fab
        fixed
        right
        @click="showCreateForm"
    >
      <v-icon>＋</v-icon> -->
    <!-- </v-btn> -->
    <button class="btn-square-little-rich" @click="showCreateForm">コメントする</button>
    <v-dialog v-model="displayForm" max-width="500px">
      <!--コメント入力フォーム-->
      <v-card>
        <v-container>
          <h2>コメント追加</h2>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
                v-model="inputComment"
                :rules="commentRules"
                label="コメント"
                required
            ></v-text-field>
            <v-btn
                :disabled="!valid"
                @click="addComment"
            >
              投稿する
            </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import {db} from '../plugins/firebase';

  export default {
    name: 'CreateForm',
    data: () => ({
      // form入力データ
      inputComment: "",
      // バリデーション
      valid: true,
      commentRules: [
        v => !!v || 'コメントは必須項目です',
      ],
      // Formダイアログの表示可否
      displayForm: false,
    }),
    methods: {
      // コメント追加
      addComment() {
        const now = new Date()
        // コメントをFirestoreへ登録
        db.collection('comments').add({
          content: this.inputComment,
          createdAt: now,
          uid: null,
          name: this.$store.state.user_name,
          image_url: this.$store.state.profile_image_url
        })
        // ダイアログを閉じる
        this.hideCreateForm()
      },
      // Formの初期化
      clear() {
        this.$refs.form.reset()
      },
      // Formダイアログの表示
      showCreateForm() {
        this.displayForm = true
      },
      //
      // Formダイアログの非表示
      hideCreateForm() {
        this.clear()
        this.displayForm = false
      },
    },
  }
</script>

<style scoped>
.btn-square-little-rich {
  position: relative;
  display: inline-block;
  padding: 0.25em 0.5em;
  text-decoration: none;
  color: #FFF;
  background: #03A9F4;/*色*/
  border: solid 1px #0f9ada;/*線色*/
  border-radius: 4px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.2);
  text-shadow: 0 1px 0 rgba(0,0,0,0.2);
  margin-bottom: 10px;
  width: 100%;
}

.btn-square-little-rich:active {
  /*押したとき*/
  border: solid 1px #03A9F4;
  box-shadow: none;
  text-shadow: none;
}
</style>>