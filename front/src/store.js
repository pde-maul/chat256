import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import 'babel-polyfill'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import freeze from 'redux-freeze'
import { reducers } from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

injectTapEventPlugin()

let middlewares = []

middlewares.push(routerMiddleware(browserHistory))
//middlewares.push(logger)
middlewares.push(thunk)

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(freeze)
}

let middleware = applyMiddleware(...middlewares)

if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

const store = createStore(reducers, middleware)
const history = syncHistoryWithStore(browserHistory, store)

export { store, history }
