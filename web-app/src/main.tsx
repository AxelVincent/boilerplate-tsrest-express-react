import App from '@Src/App.tsx'
import '@Src/index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { initQueryClient } from '@ts-rest/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRoot } from 'react-dom/client'
import { webAppContracts } from '@Shared/contracts/routes_web_app'

export const apiClient = initQueryClient(webAppContracts, {
	baseHeaders: {},
	baseUrl: 'http://localhost:3333',
})

export const queryClient = new QueryClient()

const Wrappers = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<App />
			<ReactQueryDevtools />
		</QueryClientProvider>
	)
}

const container = document.getElementById('root')
 
const root = createRoot(container!)
root.render(<Wrappers />)