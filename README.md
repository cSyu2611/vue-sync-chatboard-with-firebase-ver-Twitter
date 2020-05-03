# vue-sync-chatboard-with-firebase-ver-Twitter

# 概要

- BaaS の firebase を利用したログイン認証システム ＋ オンライン同期掲示板を Vue.js で実装(Twitter 連携版)

# TODO

1. firebase

- 発行される firebaseConfig を[config/env.js](https://github.com/cSyu2611/vue-sync-chatboard-with-firebase-ver-Twitter/blob/master/config/env_tmp.js)に貼り付け（env_tmp.js をコピー＆リネーム）
- firebase にデプロイ
- Twitter 認証を有効にする(API キーとシークレットの登録）
- Web サイト URL とコールバック URL をコピーしておく

2. Twitter App

- Web サイト URL とコールバック URL を設定
- Keys and Tokens から API キーとシークレットをコピーしておく

* 1 の作業に 2 の情報が、2 の作業に 1 の情報が必要でめんどくさかった

# サンプル

- サンプルは[こちらから](https://vue-sync-chatboard-with-fb.web.app/)

# 今後の予定

- これをベースにオンライン掲示板のプロトタイプを作成する

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
