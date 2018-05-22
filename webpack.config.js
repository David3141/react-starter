const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack')
const { resolve } = require('path')

const ENV = process.env['NODE_ENV']

const JS_RULE = { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }

const STYLE_RULE = {
  test: /\.(css|scss)$/,
  use: [
    ENV === 'development' ? { loader: 'style-loader' } : MiniCssExtractPlugin.loader,
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
  entry: [resolve(__dirname, 'src', 'index.js')],

  output: {
    path       : resolve(__dirname, 'dist'),
    filename   : 'bundle.js',
    publicPath : '/'
  },

  devtool: 'inline-source-map',

  module: {
    rules: [JS_RULE, STYLE_RULE]
  },

  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin()
  ]
}

if (ENV === 'development') {
  webpackConfig.mode = 'development'

  webpackConfig.entry.unshift('webpack-hot-middleware/client')
  webpackConfig.entry.unshift('react-hot-loader/patch')

  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())

} else if (ENV === 'production') {
  webpackConfig.mode = 'production'

  webpackConfig.plugins.push(new webpack.optimize.OccurrenceOrderPlugin())
}

module.exports = webpackConfig
