import * as express from 'express'
import serverRoutes from './routes/serverRoutes'

const app = express()

const PORT: number = 3020

app.use(express.static('public'))
app.use('/', serverRoutes)

app.listen(PORT, (): void => {
  global.console.log(`app listening @ ${PORT}`)
  return
})

