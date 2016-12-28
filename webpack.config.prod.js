var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = require('./webpack.config.dev');

config.devtool = null;
config.plugins = config.plugins.concat([
  new webpack.optimize.OccurenceOrderPlugin(),

  new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false
    },
    exclude: [/\.min\.js$/gi, /react/gi]
  })
]);

module.exports = config;