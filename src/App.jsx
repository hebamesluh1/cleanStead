import { Suspense } from "react"
import Router from "./Router"
import AuthProvider from "./context/AuthContext"
import { Spinner } from "./components"

function App() {

  return (
    <Suspense fallback={<Spinner/>}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </Suspense>
  )
}

export default App
