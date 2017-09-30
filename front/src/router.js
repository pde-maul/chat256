import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { history } from './store.js'
import App from './pages/App'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Auth from './pages/Auth'

const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='auth' component={Auth} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
)

export { router }
