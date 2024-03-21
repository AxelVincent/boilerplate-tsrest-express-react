import '@Src/pre-start' // Must be the first import
import EnvVars from '@Src/constants/env_vars'
import server from '@Src/server'

// **** Run **** //
server.listen(EnvVars.Port, () => console.log(`Listening at http://localhost:${EnvVars.Port}`))