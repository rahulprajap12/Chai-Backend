import express from 'express'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use((req, res, next) => {
  console.log("Middleware executed")
  next()
})

app.use('/', indexRoutes)

export default app
