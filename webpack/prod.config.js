var path = require('path');
var webpack = require('webpack');
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

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
        loaders: ['babel']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    })
  ]
};

module.exports = config;
