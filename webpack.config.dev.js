var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry: './src/index.js',
  output: {
    path: './assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }]
  },
  plugins: [
    new ExtractTextPlugin("style.css", {
      allChunks: true
    }),
    // Avoid publishing files when compilation failed:
    new webpack.NoErrorsPlugin(),

    // Aggressively remove duplicate modules:
    new webpack.optimize.DedupePlugin()
  ],
  // Generate external sourcemaps for the JS & CSS bundles
  devtool: 'source-map',
};

module.exports = config;