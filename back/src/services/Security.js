import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { secret } from '../../config'
import hasha from 'hasha'

const hashData = (data, algo, iter) => {
  let hash = data
  switch (algo) {
    case 'sha1':
      for (let i = 0; i < iter; i++) {
        hash = hasha(hash, { algorithm: 'sha1' })
      }
      break

    case 'sha256':
      for (let i = 0; i < iter; i++) {
        hash = hasha(hash, { algorithm: 'sha256' })
      }
      break

    case 'md5':
      for (let i = 0; i < iter; i++) {
        hash = hasha(hash, { algorithm: 'md5' })
      }
      break

  }
  return hash
}

const hash = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 3, (err, hash) => {
      if (err) {
        reject(err)
      } else {
        resolve(hash)
      }
    })
  })
}

const compare = (password, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

const encode = (user) => {

  const toEncode = {
    _id: user._id.toString(),
    username: user.username,
  }
  const expiresIn = 60 * 60 * 24
  return jwt.sign(toEncode, secret, { expiresIn })
}

module.exports = {
  encode,
  compare,
  hash,
  hashData,
}
