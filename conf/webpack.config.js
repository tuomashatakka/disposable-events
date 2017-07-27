
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('../package.json')
const { DefinePlugin, NamedModulesPlugin } = webpack
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const ENTRY_FILE_PATH = __dirname + '/../src/index.js'
const MAIN_OUTPUT_NAME = '[name].js'
const DIST_PATH = __dirname + '/../dist'
const CSS_OUTPUT_NAME  = 'style.css'

const library = config.name.replace(/[^\w]+(\w)/g, (_, c) => c.toUpperCase())

const dev = false

const entry = dev ? {
  vendor:   'babel-polyfill',
  dev:      'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
  hot:      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
  main:     ENTRY_FILE_PATH
} : { main: ENTRY_FILE_PATH }

const filename = dev ?
  MAIN_OUTPUT_NAME :
  library + '.js'

let output = {
  library,
  filename,
  path: DIST_PATH,
  libraryTarget: 'umd',
  auxiliaryComment: "Kikke li"
}

let plugins = [ new UglifyJsPlugin() ]
let rules = [
  {
    test: /\.jsx?$/,
    use: 'babel-loader',
    exclude: /node_modules\/(?!mapbox-gl\/js)/,
  },
]

let conf = { entry, output, plugins, target: "web", module: { rules } }
let development = {}

if (dev){
  output.publicPath   = '/lol'

  const extractPlugin = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    loader:   'css-loader!less-loader' })

  rules.push({
    test: /.less$/,
    use:  extractPlugin})

  plugins.concat([
    new NamedModulesPlugin(),
    new ExtractTextPlugin(CSS_OUTPUT_NAME),
    new DefinePlugin({}) ])

  development = {
    rules,
    output,
    plugins,
    devtool:   'source-map',
    devServer: {
      hot:     true,
      https:   false,
      historyApiFallback: true }}
}



module.exports = Object.assign({}, conf, development)
