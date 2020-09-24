const { Nuxt, Builder } = require('nuxt')
const express = require('express')
const session = require('express-session')

const app = express()
const isProd = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 3000

// 用指定的配置对象实例化 Nuxt.js
const config = require('../nuxt.config.js')
config.dev = !isProd
const nuxt = new Nuxt(config)
const sess = {
  secret: 'keyboard cat',
  cookie: {},
  resave: true,
  saveUninitialized: true
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  // sess.cookie.secure = true // serve secure cookies
}

app.use(express.static('../static'))

app.use(session(sess))
app.use('/api', require('./api'))

// 用 Nuxt.js 渲染每个路由
app.use(nuxt.render)
// 在开发模式下启用编译构建和热加载
if (config.dev) {
  new Builder(nuxt).build().then(listen)
} else {
  listen()
}

function listen () {
  // 服务端监听
  app.listen(port, '0.0.0.0')
  console.log('Server listening on `localhost:' + port + '`.')
}
