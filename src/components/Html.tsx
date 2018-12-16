import * as React from 'react'
import App from '../containers/App'

interface Props {}
const Html: React.SFC<Props> = (props: Props) => {
  return (
    <html>
      <head>
        <title>App</title>
        <link rel="stylesheet" type="text/css" href="css/reset.css" />
        {
          // <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css" />
        }
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
