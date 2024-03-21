import { WebAppContracts } from '@Shared/contracts/routes_web_app'
import { AppRouteImplementation } from '@ts-rest/express'

type Route = {
    getPost: AppRouteImplementation<WebAppContracts['posts']['getPost']>;
    createPost: AppRouteImplementation<WebAppContracts['posts']['createPost']>
}

export const postsHandlers: Route = {
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
}