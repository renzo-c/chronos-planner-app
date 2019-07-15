const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  node: {
    fs: 'empty',
  },

  entry: './src/index.jsx',

  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        options: { modules: true },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Chronos Planner',
      template: './src/indexTemplate.html',
    }),
  ],

  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js',
  },

  devServer: {
    // For index.html. Static files are served from url pointed to by contentBase (e.g: index.html)
    contentBase: './public',
    // For bundle.js. Html page <script> tags are pointing to the in-memory bundle, which is served at url pointed to by publicPath
    publicPath: '/',
    watchContentBase: true,
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
};
