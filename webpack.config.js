const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  devtool: 'source-map',
  node: { fs: 'empty' },
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
    // new UnminifiedWebpackPlugin()
  ],

  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: './dist',
    port: 3000
  }
};
