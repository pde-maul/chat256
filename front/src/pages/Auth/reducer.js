import { LOGIN_USER_SUCCESS, LOADING, LOGOUT } from './actions'

const initialState = {
  loading: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return Object.assign({}, state, action.user, { loading: false })

    case LOADING:
      return Object.assign({}, state, { loading: true })

    case LOGOUT:
      return initialState
    default:
      return state
  }
}

export default authReducer
