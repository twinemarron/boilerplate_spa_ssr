import * as React from 'react'
import App from '../containers/App'

interface Props {}
const Html: React.SFC<Props> = (props: Props) => {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <title>App</title>
        <link rel="stylesheet" type="text/css" href="css/reset.css" />
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
