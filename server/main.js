const express       = require('express')
const path          = require('path')
const compression   = require('compression')

const base_dir = path.resolve(__dirname, '..')
const env      = process.env['NODE_ENV']

const app = express()
app.use(compression())

// webpack-HMR in development, /dist in production
if (env === 'development') {
  const webpack       = require('webpack');
  const webpackConfig = require('../webpack.config');
  const compiler      = webpack(webpackConfig);

  app.use(require("webpack-dev-middleware")(compiler, {
    hot: true,
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));

  app.use(require("webpack-hot-middleware")(compiler));

} else {
  app.use(express.static(path.join(base_dir, 'dist')))
}

app.use(express.static(path.join(base_dir, 'public')))

const PORT = process.env.PORT || 8080

app.listen(PORT, function() {
  console.log(env + ' express server running at localhost:' + PORT)
})
