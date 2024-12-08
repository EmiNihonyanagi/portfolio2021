const path = require('path');

module.exports = {
  mode: 'development', // development → sourcemap, production → minify

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/js/index.js`, // メインとなるJavaScriptファイル（エントリーポイント）

  // ファイルの出力設定
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // pathモジュールを使って出力先を指定
  },
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'), // 出力先ディレクトリ
    },
    port: 3000, // ローカルサーバーのポート番号
    open: true, // ブラウザを自動で開く
    hot: true, // ホットリロード
    compress: true, // Gzip圧縮
  },

  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js$/,
      },
    ],
  },
};
