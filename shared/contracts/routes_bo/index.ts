import { initContract } from '@ts-rest/core'
import { postsContracts } from './posts'

const c = initContract()
export const boContracts = c.router(
  {
    posts: postsContracts,
  },
  {
    pathPrefix: '/bo',
  }
)
  
export type BoContracts = typeof boContracts