const {Router} = require('express')

module.exports = app => {
  const router = new Router()

  router.get('*', (req, res) => {
    app.render(req, res, req.params[0], req.query)
  })

  return router
}
