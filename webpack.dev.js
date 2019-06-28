const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',

  devtool: 'eval-source-map',
  
  entry: "./src/index.js",
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: 'Chronos Planner',
        header: 'Welcome to Chronos Planner :)',        
        template: './src/indexTemplate.html'
    })
  ],

  output: {
    path: __dirname + "/public",
    publicPath: "",
    filename: "bundle.js"
  },

  devServer: {
    // For index.html. Static files are served from url pointed to by contentBase (e.g: index.html)
    contentBase: "./public",
    // For bundle.js. Html page <script> tags are pointing to the in-memory bundle, which is served at url pointed to by publicPath 
    publicPath: "/",
    watchContentBase: true,
    compress: true,
    port: 3000,
    hot: true
  }
};
