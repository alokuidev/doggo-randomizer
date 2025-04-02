import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import DogImage from "./component/dogImage";



function App() {

  const queryClient = new QueryClient();

  

  

  return (
    <QueryClientProvider client={queryClient}>
      <DogImage/>
    </QueryClientProvider>
  )
}

export default App
