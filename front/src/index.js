import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store.js'
import { router } from './router.js'
import { CookiesProvider } from 'react-cookie'

// render the main component
ReactDOM.render(
  <MuiThemeProvider>
    <CookiesProvider>
      <Provider store={store}>
        {router}
      </Provider>
    </CookiesProvider>
  </MuiThemeProvider>,
  document.getElementById('app')
)
