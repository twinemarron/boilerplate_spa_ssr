import * as React from 'react'
import App from './App'

interface Props {}
const Html: React.SFC<Props> = (props) => {
  return (
    <html>
      <head>
        <title>App</title>
      </head>
      <body>
        <div id="app">
          <App /> 
        </div>
        <script src="/client.bundle.js" />
      </body>
    </html>
  )
}

export default Html
