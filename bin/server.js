// let path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('../conf/webpack.config.js')
const fs   = require('fs')
const path = require('path')

const PUBLIC_PATH = path.resolve(__dirname + '/../public')
const ASSETS_PATH = path.resolve(__dirname + '/../dist')
const PUBLIC      = process.argv[3] || PUBLIC_PATH
const ASSETS      = process.argv[4] || ASSETS_PATH || PUBLIC
const PORT        = process.argv[2] || process.env.PORT || 15517
let server        = express()
let router        = express.Router()
let compiler      = webpack(config)

const matchVariable = /\{\{\s*(\w[^\s\}]*)\s*\}\}/g

function template (_, variable) {
  console.log({_, variable, self:this})
  let parts = variable.split('.')
  let iteratee = this
  let part
  while(iteratee && (part = parts.shift())) {
    iteratee = iteratee[part]
  }
  return iteratee
}

function onInitializedHandler () {
  console.log('listening on port', PORT)
}

const publicpath = 'lol'
const uri   = route => path.join(PUBLIC, route)
const asset = route => route.startsWith('/') ? route : ('/' + publicpath + '/' + route + '.js')
const options = { publicPath: config.output.publicPath, stats: { colors: true }}

// server.use('/assets',   express.static(ASSETS))

router.get('/:page', (request, response, next) => {

  let { page } = request.params
  let context = {
    url: {
      vendor: asset('vendor'),
      main: asset('main'),
    }
  }
  let read = (page) => fs.readFileSync(uri(page), 'utf8')
  let proc = (contents) => contents.replace(matchVariable, template.bind(context))

  switch(page) {
    default:
      let contents = read('index.html')
      console.log("contents", contents)
      return response.send(proc(contents))
  }

})
// server.set('views', PUBLIC)
server.use(webpackDevMiddleware(compiler, options))
server.use(webpackHotMiddleware( compiler, { log: console.log }))
server.use(router)
// server.use('/', express.static(PUBLIC))
server.listen(PORT, onInitializedHandler)
