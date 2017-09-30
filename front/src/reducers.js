import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import appReducer from './pages/App/reducer'
import authReducer from './pages/Auth/reducer'
import hashReducer from './pages/Home/reducer'

export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  app: appReducer,
  user: authReducer,
  data: hashReducer,
})
