import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

const PostSchema = z.object({
  id: z.coerce.number(),
  title: z.string(),
  content: z.string(),
});

export const contract = c.router({
    getPost: {
        method: 'GET',
        path: `/posts/:id`,
        pathParams: z.object({
            id: z.coerce.number(),
        }),
        responses: {
          200: PostSchema,
        },
        summary: 'Get a post by id',
      },
  createPost: {
    method: 'POST',
    path: '/posts',
    responses: {
      201: PostSchema,
    },
    body: z.object({
      title: z.string(),
      body: z.string(),
    }),
    summary: 'Create a post',
  },
});