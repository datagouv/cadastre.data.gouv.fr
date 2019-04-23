const {join} = require('path')
const {Router} = require('express')

module.exports = app => {
  const router = new Router()

  router.get('/robots.txt', (req, res) => {
    res.sendFile(join(__dirname, '..', 'static', 'robots.txt'))
  })

  router.get('*', (req, res) => {
    app.render(req, res, req.params[0], req.query)
  })

  return router
}
