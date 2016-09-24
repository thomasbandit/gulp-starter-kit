var path = require('path');
var webpack = require('webpack');

var config = {
  entry: './src/js/index.js',
  output: {
    path: path.join(__dirname, '../build/assets/js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src/js')
      }
    ]
  },
  devtool: 'source-map'
};

module.exports = config;
