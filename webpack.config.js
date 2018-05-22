const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const { resolve } = require('path')

const IS_PRODUCTION = process.env['NODE_ENV'] === 'production'

const JS_RULE = { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }

const STYLE_RULE = {
  test : /\.(css|scss)$/,
  use  : [
    IS_PRODUCTION ? MiniCssExtractPlugin.loader : { loader: 'style-loader' },
    { loader: 'css-loader' },
    { loader: 'sass-loader' }
  ]
}

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template : resolve(__dirname, 'src', 'index.html'),
  filename : 'index.html',
  inject   : 'body'
})

const webpackConfig = {
  devtool : 'inline-source-map',
  entry   : [resolve(__dirname, 'src', 'index.js')],
  mode    : IS_PRODUCTION ? 'production' : 'development',
  module  : { rules: [JS_RULE, STYLE_RULE] },
  output  : {
    path       : resolve(__dirname, 'dist'),
    filename   : 'bundle.js',
    publicPath : '/'
  },
  plugins : [
    HtmlWebpackPluginConfig,
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin()
  ]
}

if (IS_PRODUCTION) {
  webpackConfig.plugins.push(new webpack.optimize.OccurrenceOrderPlugin())
} else {
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())

  webpackConfig.entry.unshift('webpack-hot-middleware/client')
  webpackConfig.entry.unshift('react-hot-loader/patch') // has to be first entry, so unshift last
}

module.exports = webpackConfig
