import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { createExpressEndpoints, initServer } from '@ts-rest/express'

import { contract } from '@Shared/contracts/contract'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const s = initServer()

const router = s.router(contract, {
	getPost: async ({ params: { id } }) => {
		const post = { id, title: 'title', content: 'content' }

		return {
			status: 200,
			body: post
		}
	},
	createPost: async ({ body: body_ }) => {
		const { title, body } = body_
		const post = { id: 1, title, content: body }
		return {
			status: 201,
			body: post
		}
	},
})

createExpressEndpoints(contract, router, app, {
	responseValidation: true
})

export default app