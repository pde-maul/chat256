import { HASH_CALCULATED, HASH_LOADING } from './actions'

const initialState = {
  hash: null,
  loading: false,
}

const hashReducer = (state = initialState, action) => {
  switch (action.type) {
    case HASH_CALCULATED:
      return Object.assign({}, state, { hash: action.hash }, { loading: false })

    case HASH_LOADING:
      return Object.assign({}, state, { hash: null, loading: true })
    default:
      return state
  }
}

export default hashReducer
