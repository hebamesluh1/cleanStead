import { Suspense } from "react"
import Router from "./Router"
import AuthProvider from "./context/AuthContext"
import { Spinner } from "./components"
import { QueryClient, QueryClientProvider } from 'react-query'
import BookProvider from "./context/BookContext"



const queryClient = new QueryClient()
function App() {

  return (
    <Suspense fallback={<Spinner />}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BookProvider>
            <Router />
          </BookProvider>
        </AuthProvider>
      </QueryClientProvider>
    </Suspense>
  )
}

export default App
