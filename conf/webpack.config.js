
const webpack = require('webpack')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('../package.json')
// const { /* DefinePlugin, NamedModulesPlugin, */ } = webpack
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const ENTRY_FILE_PATH = __dirname + '/../src/index.js'
const CSS_OUTPUT_NAME  = 'style.css'
const MAIN_OUTPUT_NAME = '[name].js'
const DIST_PATH = __dirname + '/../dist'

const library = config.name.replace(/[^\w]+(\w)/g, (_, c) => c.toUpperCase())
const dev = false

module.exports = {

  target: "web",

  entry: {
    // vendor: 'babel-polyfill',
    // dev: 'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    // hot: 'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    main:   ENTRY_FILE_PATH
  },

  output: {
    library,
    libraryTarget: 'umd',
    filename: dev ? MAIN_OUTPUT_NAME : ('dist/' + library + '.js'),
    // path: DIST_PATH,
    // publicPath: '/lol',
    // auxiliaryComment: "Kikke li"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules\/(?!mapbox-gl\/js)/,
      },
      // {
      //   test: /.less$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     loader: "css-loader!less-loader",
      //   }),
      // },
    ]
  },

  // resolve: {
  //   alias: {
  //   }
  // },

  plugins: [
    // new NamedModulesPlugin(),
    new UglifyJsPlugin(),
    // new ExtractTextPlugin(CSS_OUTPUT_NAME),
    // new DefinePlugin({
    // })
  ],

  devtool: 'source-map',

  devServer: {
    hot: true,
    historyApiFallback: true,
    https: false,
  },
}
