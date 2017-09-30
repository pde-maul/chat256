import HashController from '../controllers/Hash.controller'

module.exports = (router) => {

  router.get('/generateDummyHash', (req, res) => {
    HashController.generateDummyHash()
    .then(result => res.status(result.status).send(result))
  })

  router.post('/calculateHash', (req, res) => {
    HashController.calculateHash(req.body)
    .then(result => res.status(result.status).send(result))
    .catch(error => res.status(error.status).send(error))
  })
}
