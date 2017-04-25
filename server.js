var express = require('express')
var path = require('path')
var compression = require('compression')

var env = process.env['NODE_ENV']

var app = express()
app.use(compression())

if (env === 'development') {
  var webpack       = require('webpack');
  var webpackConfig = require('./webpack.config');
  var compiler      = webpack(webpackConfig);

  app.use(require("webpack-dev-middleware")(compiler, {
    hot: true,
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));

  app.use(require("webpack-hot-middleware")(compiler));
} else {
}

app.use(express.static(path.join(__dirname, 'public')))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

var PORT = process.env.PORT || 8080

app.listen(PORT, function() {
  console.log(env + ' express server running at localhost:' + PORT)
})