import * as express from 'express'

const app = express()

const PORT: number = 3000

app.use(express.static('public'))

app.listen(PORT, (): void => {
  global.console.log(`app listening @ ${PORT}`)
  return
})

