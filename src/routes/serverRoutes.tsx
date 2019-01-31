import * as path from 'path'
import * as express from 'express'
import { Request, Response } from 'express'
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import configureStore from '../store/configureStore'
import { Html } from 'components/Html'

const store = configureStore()
const router: express.Router = express.Router()

router.get(
  '/client.bundle.js*',
  (req: Request, res: Response): void => {
    res.sendFile(path.resolve(`./dist${req.url}`))
  }
)

router.get(
  '*',
  (req: Request, res: Response): void => {
    res.write('<!DOCTYPE html>')
    const context: { url?: string } = {}
    ReactDOMServer.renderToNodeStream(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <Html />
        </StaticRouter>
      </Provider>
    ).pipe(res)
  }
)

export default router
