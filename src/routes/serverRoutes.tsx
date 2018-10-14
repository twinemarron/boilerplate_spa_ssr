import * as express from 'express'
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import Html from '../containers/Html'

const router = express.Router()

router.get('*', (req, res) => {
  ReactDOMServer.renderToNodeStream(
    <Html />
  ).pipe(res)
})

export default router
