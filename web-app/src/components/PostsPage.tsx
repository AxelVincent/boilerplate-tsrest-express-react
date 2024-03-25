import { apiClient } from '@Src/main'

export default function PostsPage() {
  const { data, isLoading } = apiClient.posts.getPost.useQuery([], { params: {id: 1}})
  
  if (isLoading) {
    return <div>Loading...</div>
  }
  
  if (data?.status !== 200) {
    return <div>Error</div>
  }
  
  //const [file, setFile] = React.useState<File | null>(null);
  return (
    <div>
      <h1>Post from post-service</h1>
      <div key={data.body.id}>
        <h1>{data.body.title}</h1>
        <p>{data.body.content}</p>
      </div>
    </div>
  )
}