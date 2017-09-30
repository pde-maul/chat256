import call from '../../api'
import { push } from 'react-router-redux'
import {
  addMessage,
} from '../App/actions'

const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
const LOADING = 'LOADING'
const LOGOUT = 'LOGOUT'

const loading = () => {
  return {
    type: LOADING,
  }
}

const login = (payload, cookies) => {
  return dispatch => {
    dispatch(loading())
    call('login', 'post', payload)
    .then(res => dispatch(loginSuccess(res, cookies)))
    .catch(err => dispatch(loginFailure(err)))
  }
}

const verifyUser = () => {
  return dispatch => {
    dispatch(loading())
    call('verify', 'get')
    .then(res => dispatch(verifySuccess(res)))
    .catch(err => dispatch(loginFailure(err)))
  }
}

const verifySuccess = (res) => {
  return dispatch => {
    dispatch(push('/'))
    dispatch(addMessage(res.message))
    dispatch({
      type: LOGIN_USER_SUCCESS,
      user: res.user,
    })
  }
}

const loginSuccess = (res, cookies) => {
  return dispatch => {
    let dt = new Date()
    dt.setDate(dt.getDate() + 7)
    cookies.set('token', res.token, {
      path: '/',
      expires: dt,
      httpOnly: false,
    })
    dispatch(push('/'))
    dispatch(addMessage(res.message))
    dispatch({
      type: LOGIN_USER_SUCCESS,
      user: res.user,
    })
  }
}

const loginFailure = (err) => {
  return dispatch => {
    dispatch(push('/auth'))
    dispatch({
      type: LOGIN_USER_SUCCESS,
      user: null,
    })
    dispatch(addMessage(err.message))
  }
}

const signin = (payload) => {
  return dispatch => {
    dispatch(loading())
    call('register', 'post', payload)
    .then(res => dispatch(signinSuccess(res)))
    .catch(err => dispatch(signinFailure(err)))
  }
}

const signinSuccess = (res) => {
  return dispatch => {
    dispatch({
      type: LOGIN_USER_SUCCESS,
      user: null,
    })
    dispatch(addMessage(res.message))
  }
}

const signinFailure = (err) => {
  return dispatch => {
    dispatch({
      type: LOGIN_USER_SUCCESS,
      user: null,
    })
    dispatch(addMessage(err.message))
  }
}

const logout = (cookies) => {
  return dispatch => {
    cookies.remove('token', { path: '/' })
    dispatch(push('/auth'))
    dispatch({
      type: LOGOUT,
    })
  }
}

module.exports = {
  login,
  signin,
  verifyUser,
  logout,

  LOGIN_USER_SUCCESS,
  LOADING,
  LOGOUT,
}
