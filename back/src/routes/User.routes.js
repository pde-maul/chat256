import UserController from '../controllers/User.controller'


module.exports = (router) => {

  router.get('/users', (req, res) => {

    UserController.getUsers()
    .then(result => res.status(result.status).json(result))
    .catch(err => res.status(err.status).json(err))
  })

  router.get('/users/:userId', (req, res) => {

    const {
      userId,
    } = req.params

    UserController.getUser(userId)
    .then(result => res.status(result.status).json(result))
    .catch(err => res.status(err.status).json(err))
  })

  router.put('/users/:userId', (req, res) => {

    const {
      userId,
    } = req.params

    UserController.updateUser(userId, req.body)
    .then(result => res.status(result.status).json(result))
    .catch(err => res.status(err.status).json(err))
  })

  router.delete('/users/:userId', (req, res) => {

    const {
      userId,
    } = req.params

    UserController.deleteUser(userId)
    .then(result => res.status(result.status).json(result))
    .catch(err => res.status(err.status).json(err))
  })
}
