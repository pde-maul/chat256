import User from '../models/User.model'
import Result from '../services/Result'
import Error from '../services/Error'
import Security from '../services/Security'

class AuthController {
  static createUser(data) {
    return new Promise((resolve, reject) => {
      try {

        const {
          username,
          password,
        } = data

        if (!username) {
          return reject(Error.parameter('Missing', 'username'))
        }
        if (!password) {
          return reject(Error.parameter('Missing', 'password'))
        }

        User.findOne({ username })
        .then(user => {
          if (user) {
            return reject(Error.parameter('Unavailable', 'username'))
          }
          Security.hash(data.password)
          .then(password => {
            Object.assign(data, { password })
            User.create(data)
            .then(user => resolve(Result.render('creat', 'user', user)))
          })
        })

      } catch(err) {
        Error.crash('creat', 'user', err)
      }
    })
  }

  static logUser(data) {
    return new Promise((resolve, reject) => {
      try {

        const {
          username,
          password,
        } = data

        if (!username) {
          return reject(Error.parameter('missing', 'username'))
        }
        if (!password) {
          return reject(Error.parameter('missing', 'password'))
        }

        User.findOne({ username })
        .then(user => {
          if (!user) {
            return reject(Error.parameter('invalid', 'username'))
          }
          Security.compare(password, user.password)
          .then(isSame => {
            if (!isSame) {
              return reject(Error.parameter('invalid', 'password'))
            }
            resolve(Result.renderWithToken('connect', 'user', user))
          })
        })

      } catch(err) {
        reject(Error.crash('connect', 'user', err))
      }
    })
  }
}

module.exports = AuthController
