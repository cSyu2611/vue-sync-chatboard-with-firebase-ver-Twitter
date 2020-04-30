# vue-sync-chatboard-with-firebase

# 概要

- BaaS の firebase を利用したログイン認証システム ＋ オンライン同期掲示板を Vue.js で実装．プロトタイプとして使用しようかな．

# TODO

- firebase
  - 発行される firebaseConfig を[config/env.js](https://github.com/cSyu2611/vue-authentication-with-firebase/blob/master/config/env_tmp.js)に貼り付け（env_tmp.js をコピー＆リネーム）
  - メール認証を有効にする
  - firebase の database 設定
    - テーブルを用意（comments）
    - カラムを用意（content：型 →string, createdAt：型 →timestamp, user：型 →string）

# 動作確認

- リダイレクトの確認は[こちらで](https://github.com/cSyu2611/vue-authentication-with-firebase)
- あとは適当にコメント追加したり．画像 ↓
  ![サンプル](https://github.com/cSyu2611/vue-sync-chatboard-with-firebase/blob/master/src/assets/example.png)

# 今後の予定

- これをベースに個人チャット機能のプロトタイプを作成する

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
