// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
      extensions: ['*', '.js']
  },
//   devtool: 'source-map',
  plugins: [
    //   new CleanWebpackPlugin(),
      // new HtmlWebpackPlugin({
      //     title: 'Chronos Planner',
      //     firstLine: 'This is the beginning of Chronos Planner',
      //     template: './src/indexTemplate.html'
      // })
  ],
  output: {
    path: __dirname + "/public",
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./public"
  }
};
