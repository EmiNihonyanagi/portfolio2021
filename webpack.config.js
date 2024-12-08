module.exports = {
  mode: 'development', // development → sourcemap, production → minify

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/js/index.js`, // メインとなるJavaScriptファイル（エントリーポイント）

  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist/_assets/js`,
    // 出力ファイル名
    filename: 'bundle.js',
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
