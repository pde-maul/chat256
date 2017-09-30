import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
  loggedAt: { type: Date, default: Date.now },
})

const User = mongoose.model('User', UserSchema)

module.exports = User
