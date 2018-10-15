import * as express from 'express'
import { Request, Response } from 'express';
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Html from '../containers/Html'

const router = express.Router()

router.get('*', (req: Request, res: Response) => {
  console.log('req.url: ', req.url)
  const context: { url?: string } = {}
  ReactDOMServer.renderToNodeStream(
    <StaticRouter location={req.url} context={context} >
      <Html />
    </StaticRouter>
  ).pipe(res)
})

export default router
