import Result from '../services/Result'
import Error from '../services/Error'
import Security from '../services/Security'

class HashController {
  static generateDummyHash() {
    return new Promise((resolve, reject) => {
      resolve(Result.render('render', 'hash', '00000000000000000000000000000000'))
    })
  }

  static calculateHash(body) {
    return new Promise((resolve, reject) => {
      try {

        const {
          iterations,
          algorithm,
          data
        } = body
        const iter = parseInt(iterations)
        if (isNaN(iter)) {
          reject(Error.parameter('invalid', 'iteration'))
        } else if (['sha1', 'sha256', 'md5'].indexOf(algorithm) == -1) {
          reject(Error.parameter('invalid', 'algorithm'))
        } else if (!data) {
          reject(Error.parameter('missing', 'data'))
        } else {
          const hash = Security.hashData(data, algorithm, iter)
          resolve(Result.render('render', 'hash', hash))
        }

      } catch(err) {
        reject(Error.crash('hash', 'data', err))
      }
    })
  }
}

module.exports = HashController
