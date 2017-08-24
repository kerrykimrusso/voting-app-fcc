var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: [
      'webpack-hot-middleware/client?https://0.0.0.0:8080',
      'react-hot-loader/patch',
      './client/index.js'
  ],
  output: {
    filename: 'app.bundle.js',
    publicPath: '/public/js/',
    path: '/'
  },
  module: {
      rules: [
          {
              test: /\.jsx?$/,
              loaders: 'babel-loader',
              exclude:/node_modules/
          },
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
          },
          {
              test: /\.(eot|svg|png|woff2*|ttf)$/i,
              loaders: 'file-loader'
          }
      ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};