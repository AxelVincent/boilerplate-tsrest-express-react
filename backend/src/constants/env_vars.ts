/**
 * Environments variables declared here.
 */

export default {
	NodeEnv: (process.env.NODE_ENV ?? ''),
	Port: (process.env.PORT ?? 3333),
} as const
  