import * as React from 'react'
import * as App from './App'

const Html = () => {
  return (
    <html>
      <head>
        <title>App</title>
      </head>
      <body>
        <div id="app">
          <App /> 
        </div>
        <script src="/js/client.bundle.js" />
      </body>
    </html>
  )
}

export default Html
