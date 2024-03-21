import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const PostSchema = z.object({
    id: z.coerce.number(),
    title: z.string(),
    content: z.string(),
});

const c = initContract()

export const postsContracts = c.router({
        getPost: {
            method: 'GET',
            path: `/:id`,
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
            path: '',
            responses: {
                201: PostSchema,
            },
            body: z.object({
                title: z.string(),
                body: z.string(),
            }),
            summary: 'Create a post',
        },
    },
    {
        pathPrefix: 'posts'
    }
);