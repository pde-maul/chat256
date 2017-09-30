const API_URL = 'http://localhost:5000/api'
import request from 'superagent'

function getCookie(name) {
  if (typeof window !== 'undefined') {
    let value = '; ' + document.cookie
    let parts = value.split('; ' + name + '=')
    if (parts.length == 2) return parts.pop().split(';').shift()
  }
}

const call = (endpoint, method, payload) => {
  return new Promise((resolve, reject) => {
    const token = getCookie('token')
    if (token && token.length) {
      request
      [method](`${API_URL}/${endpoint}`)
      .send(payload)
      .set('accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        if (err) {
          reject(res.body)
        } else {
          resolve(res.body)
        }
      })
    } else {
      request
      [method](`${API_URL}/${endpoint}`)
      .send(payload)
      .set('accept', 'application/json')
      .end((err, res) => {
        if (err) {
          reject(res.body)
        } else {
          resolve(res.body)
        }
      })
    }
  })
}

export default call
