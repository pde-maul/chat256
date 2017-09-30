import {
  addMessage,
} from '../App/actions'

import call from '../../api'

const HASH_CALCULATED = 'HASH_CALCULATED'
const HASH_LOADING = 'HASH_LOADING'

const loading = () => {
  return {
    type: HASH_LOADING,
  }
}

const hashCalculated = (res) => {
  return dispatch => {
    dispatch(addMessage(res.message))
    dispatch({
      type: HASH_CALCULATED,
      hash: res.hash,
    })
  }
}

const hashNotCalculated = (err) => {
  return dispatch => {
    dispatch(addMessage(err.message))
    dispatch({
      type: HASH_CALCULATED,
      hash: null,
    })
  }
}

const calculateHash = (payload) => {
  return dispatch => {
    dispatch(loading())
    call('calculateHash', 'post', payload)
    .then(res => dispatch(hashCalculated(res)))
    .catch(err => dispatch(hashNotCalculated(err)))
  }
}

module.exports = {
  HASH_CALCULATED,
  HASH_LOADING,
  calculateHash,
}
