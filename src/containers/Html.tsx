import * as React from 'react'
import App from './App'

// interface HtmlInterface {
//     children?: React.ReactChild;
// }
// const Html: React.SFC<HtmlInterface>= () => {
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
