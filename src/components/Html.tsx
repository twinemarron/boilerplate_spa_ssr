import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import * as theme from 'styled-theming'
import App from '../components/App'

interface Props {}

const Html: React.SFC<Props> = (props: Props) => {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
          name="viewport"
        />
        <title>App</title>
        <link rel="stylesheet" type="text/css" href="css/reset.css" />
        <link rel="stylesheet" type="text/css" href="css/main.css" />
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
