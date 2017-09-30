import User from '../models/User.model'
import Result from '../services/Result'
import Error from '../services/Error'

class UserController {

  static getUsers() {
    return new Promise((resolve, reject) => {
      try {
        User.find()
        .then(users => resolve(Result.render('render', 'users', users)))

      } catch(err) {
        reject(Error.crash('render', 'users', err))
      }
    })
  }

  static getUser(userId) {
    return new Promise((resolve, reject) => {
      try {
        User.findOne({ _id: userId })
        .then(user => resolve(Result.render('render', 'user', user)))

      } catch(err) {
        reject(Error.crash('render', 'user', err))
      }
    })
  }

  static updateUser(userId, data) {
    return new Promise((resolve, reject) => {
      try {
        User.findOneAndUpdate({ _id: userId }, { $set: data }, { new: true })
        .then(user => resolve(Result.render('updat', 'user', user)))

      } catch(err) {
        reject(Error.crash('updat', 'user', err))
      }
    })
  }

  static deleteUser(userId) {
    return new Promise((resolve, reject) => {
      try {
        User.findOneAndRemove({ _id: userId })
        .then(user => resolve(Result.render('delet', 'user', user)))

      } catch(err) {
        reject(Error.crash('updat', 'user', err))
      }
    })
  }
}

module.exports = UserController
