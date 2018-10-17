import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import { BrowserRouter } from 'react-router-dom'
import App from './containers/App'

ReactDOM.hydrate(
  <App />,
  document.getElementById('app')
)

