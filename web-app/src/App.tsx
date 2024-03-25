import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import PostsPage from '@Src/components/PostsPage'
import Layout from './Layout'
import HomePage from '@Src/components/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/posts',
        element: <PostsPage />,
      },
    ],
  },
])

function App() {
  return (<RouterProvider router={router} fallbackElement={<Fallback />} />
  )
}

function Fallback() {
  return <p>Performing initial data load</p>
}

export default App