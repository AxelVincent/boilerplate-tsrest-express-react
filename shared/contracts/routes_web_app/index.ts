import { initContract } from "@ts-rest/core";
import { postsContracts } from "./posts";

const c = initContract()
export const webAppContracts = c.router(
	{
	  posts: postsContracts,
	},
	{
	  pathPrefix: '/api',
	}
  );
  
export type WebAppContracts = typeof webAppContracts