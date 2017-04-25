const { resolve } = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const env = process.env['NODE_ENV']

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

const webpackConfig = {
  context: resolve(__dirname, 'src'),

  entry: [
    './index.js'
  ],

  output: {
    path: resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: './'
  },

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'bin'),
    publicPath: '/'
  },

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      }
    ]
  },

  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.NamedModulesPlugin(),
    extractSass,
  ]
}

if (env === 'development') {
  webpackConfig.entry.unshift('webpack/hot/only-dev-server')
  webpackConfig.entry.unshift('webpack-dev-server/client?http://localhost:8080')
  webpackConfig.entry.unshift('react-hot-loader/patch')

  const hmrPlugin = new webpack.HotModuleReplacementPlugin()
  webpackConfig.plugins.push(hmrPlugin)
} else if (env === 'production') {
  webpackConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    })
  )
  webpackConfig.plugins.push(new webpack.optimize.OccurrenceOrderPlugin())
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: true
      }
    }
  ))
}

module.exports = webpackConfig