import * as express from 'express'
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'

const router = express.Router()

router.get('*', (req, res) => {
  ReactDOMServer.renderToNodeStream(
    <div>div</div>
  ).pipe(res)
})

export default router
