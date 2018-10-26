import * as express from 'express'
import { Request, Response } from 'express';
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import configureStore from '../store/configureStore'
import Html from '../containers/Html'

const store = configureStore()

const router = express.Router()

router.get('*', (req: Request, res: Response) => {
  const context: { url?: string } = {}
  ReactDOMServer.renderToNodeStream(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context} >
        <Html />
      </StaticRouter>
    </Provider>
  ).pipe(res)
})

export default router
