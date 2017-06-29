// webpack.config.js
'use strict';
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require('path');
const env  = require('yargs').argv.env;

const pkg = require('./package.json');

let libraryName = pkg.name;
let outputFile;
let plugins = [];

plugins.push(new CleanWebpackPlugin(['./lib']));

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + '-' + pkg.version + '.min.js';
} else {
  outputFile = libraryName + '-' + pkg.version + '.js';
}

plugins.push(new webpack.ProvidePlugin({'Backbone': 'backbone'}));
plugins.push(new webpack.optimize.ModuleConcatenationPlugin());

let config = {
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
        test: /(\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }/*,
      {
        test: /(\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }*/
    ]
  },

  resolve: {
    alias: {
      backbone$: path.resolve(__dirname, './node_modules/backbone/backbone-min.js'),
      jquery$: path.resolve(__dirname, './node_modules/jquery/dist/jquery.min.js')
    },
    extensions: ['.js'],
    modules: [path.resolve('./src')]
  },

  plugins: plugins
};

module.exports = config;
