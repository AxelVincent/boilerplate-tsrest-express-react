import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { createExpressEndpoints, initServer } from '@ts-rest/express'

import { webAppContracts } from '@Shared/contracts/routes_web_app'
import { webAppHandlers } from './routes_web_app'
import { boContracts } from '@Shared/contracts/routes_bo'
import { boHandlers } from './routes_bo'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const s = initServer()
const router = s.router(webAppContracts, webAppHandlers)
createExpressEndpoints(webAppContracts, router, app, {
  responseValidation: true
})

s.router(boContracts, boHandlers)
createExpressEndpoints(boContracts, router, app, {
  responseValidation: true
})

export default app