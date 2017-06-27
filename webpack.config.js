// webpack.config.js
'use strict';
var webpack = require('webpack');
var path = require('path');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;
var libraryName = 'library';
var outputFile = libraryName + '.js';
var plugins = [];

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

plugins.push(new webpack.ProvidePlugin({
 'Backbone': 'backbone'
}));

plugins.push(new webpack.optimize.ModuleConcatenationPlugin());

var config = {
  entry: __dirname + '/src/index.js',

  devtool: 'source-map',

  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },/*
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }*/
    ]
  },

  resolve: {
    alias: {
      backbone$: path.resolve(__dirname, './node_modules/backbone/backbone-min.js')
    },
    extensions: ['.js'],
    modules: ['node_modules']
  },

  plugins: plugins
};

module.exports = config;
