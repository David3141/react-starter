const { resolve } = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HtmlWebpackPlugin = require('html-webpack-plugin')

const env = process.env['NODE_ENV']

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})

const webpackConfig = {
  context: resolve(__dirname, 'src'),

  entry: ['./index.js'],

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: [
          env === 'development' ? { loader: 'style-loader' } : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },

  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin()
  ]
}

if (env === 'development') {
  webpackConfig.mode = 'development'
  webpackConfig.entry.unshift('webpack-hot-middleware/client')
  webpackConfig.entry.unshift('react-hot-loader/patch')

  const hmrPlugin = new webpack.HotModuleReplacementPlugin()
  webpackConfig.plugins.push(hmrPlugin)

} else if (env === 'production') {
  webpackConfig.mode = 'production'
  webpackConfig.plugins.push(new webpack.optimize.OccurrenceOrderPlugin())
}

module.exports = webpackConfig
