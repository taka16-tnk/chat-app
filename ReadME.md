Creating the Chat App Project
  ・chat-appフォルダ作成
    src/index.jsを作成
      ローカルサーバーの接続コードを記載
    public/index.htmlを作成
      ブラウザに表示させるページのコードを記述
  ・npm init、 npm i expressをインストール
    package.jsonの"scripts":に実行コードを記述する
      "start": "node src/index.js",
      "dev": "nodemon src/index.js"
