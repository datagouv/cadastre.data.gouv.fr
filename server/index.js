const {join} = require('path')
const url = require('url')
const express = require('express')
const next = require('next')
const compression = require('compression')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  if (!dev) {
    server.use(compression())
  }

  server.get('/robots.txt', (req, res) => {
    res.sendFile(join(__dirname, '..', 'public', 'static', 'robots.txt'))
  })

  server.get('*', (req, res) => {
    /* eslint node/no-deprecated-api: off */
    const parsedUrl = url.parse(req.url, true)
    handle(req, res, parsedUrl)
  })

  server.listen(port, err => {
    if (err) {
      throw err
    }

    console.log(`> Ready on http://localhost:${port}`)
  })
})
