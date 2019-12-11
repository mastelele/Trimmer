import React from 'react'
import { render } from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import App from './App'
import configureStore from './store/configureStore'
import * as serviceWorker from './serviceWorker'

const store = configureStore()
const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  )

serviceWorker.register()

renderApp()
