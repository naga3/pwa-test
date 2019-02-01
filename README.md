# pwatest

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## 開発ログ

こちらを参考にした。
https://techblog.scouter.co.jp/entry/2017/12/07/080416

### Nuxt.js

ユニバーサルアプリケーションフレームワーク

```
yarn global install vue-cli
vue init nuxt-community/starter-template pwa-test
```

PWAモジュールのインストール

```
yarn add '@nuxtjs/pwa'
```

### OneSignal

https://onesignal.com/

ブラウザPushができる。
無料、5000回/秒

```
yarn add '@nuxtjs/onesignal'
```

