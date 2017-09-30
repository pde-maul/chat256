import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import config from '../config'
import logger from './services/logger'
import expressJwt from 'express-jwt'
import Error from './services/Error'
import routes from './routes'

const app = express()
const router = express.Router()
routes(router)

mongoose.Promise = global.Promise

let db = 'mongodb://'
db += `${config.database.hostname}:${config.database.port}/${config.database.name}?ssl=${config.database.ssl}`

mongoose.connect(db, (err) => {
  if (err) { throw err }

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(cors({
    origin: [`${config.front.hostname}`, `${config.front.hostname}:${config.front.port}`, `${config.host}`, `${config.port}`],
    optionsSucccessCode: 200,
  }))

  app.use('/api', expressJwt({ secret: config.secret }).unless({path: ['/api/login', '/api/register']}), router)
  app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      const error = Error.forbidden()
      res.status(error.status).send(error);
    }
  })

  app.listen(config.port, () => {
    logger.success(`App listening on port ${config.port}!`)
  })
})
