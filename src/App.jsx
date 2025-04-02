import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useEffect } from "react";
import { fetchApi } from "./api/api";


function App() {

  const queryClient = new QueryClient();

  useEffect(() =>{
    fetchApi();
  },[])

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <h1 className="title">Random Dog Image</h1>
        <div className="imageContainer">
            <img id="dogImage" className="dogImage" src="" alt="Random Dog"/>
        </div>
        <button id="fetchButton" className="fetchButton">Fetch New Dog</button>
    </div>
    </QueryClientProvider>
  )
}

export default App
