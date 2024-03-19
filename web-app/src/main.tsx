import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { initQueryClient } from '@ts-rest/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRoot } from 'react-dom/client';

import { contract } from '../../shared/contracts/contract'


export const postsClient = initQueryClient(contract, {
  baseHeaders: {},
  baseUrl: 'http://localhost:3333',
});

export const queryClient = new QueryClient();

const Wrappers = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(<Wrappers />);