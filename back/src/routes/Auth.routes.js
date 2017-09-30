import AuthController from '../controllers/Auth.controller'

module.exports = (router) => {

  router.post('/register', (req, res) => {
    AuthController.createUser(req.body)
    .then(result => res.status(result.status).json(result))
    .catch(err => res.status(err.status).json(err))
  })

  router.post('/login', (req, res) => {
    AuthController.logUser(req.body)
    .then(result => res.status(result.status).json(result))
    .catch(err => res.status(err.status).json(err))
  })

  router.get('/verify', (req, res) => {
    res.status(200).send({ user: req.user, message: 'User successfully rendered' })
  })
}
