import { Suspense } from "react"
import Router from "./Router"
import AuthProvider from "./context/AuthContext"
import { Spinner } from "./components"
import { QueryClient, QueryClientProvider } from 'react-query'



const queryClient = new QueryClient()
function App() {

  return (
    <Suspense fallback={<Spinner />}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </QueryClientProvider>
    </Suspense>
  )
}

export default App
