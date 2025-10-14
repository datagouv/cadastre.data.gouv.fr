import path from 'path'
import url from 'url'
import express from 'express'
import next from 'next'
import compression from 'compression'

const port = Number.parseInt(process.env.PORT, 10) || 3000
const development = process.env.NODE_ENV !== 'production'
const app = next({dev: development})
const handle = app.getRequestHandler()

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

try {
  await app.prepare()
  const server = express()

  if (!development) {
    server.use(compression())
  }

  server.get('/robots.txt', (request, response) => {
    response.sendFile(path.join(__dirname, '..', 'public', 'static', 'robots.txt'))
  })

  server.get('*', (request, response) => {
    // eslint-disable-next-line n/no-deprecated-api
    const parsedUrl = url.parse(request.url, true)
    handle(request, response, parsedUrl)
  })

  server.listen(port, error => {
    if (error) {
      throw error
    }

    console.log(`> Ready on http://localhost:${port}`)
  })
} catch (error) {
  console.error(error)
  throw error
}
