import { Suspense } from "react"
import Router from "./Router"
// import AuthProvider from "./context/AuthContext"

function App() {

  return (
    <Suspense fallback="loading..">
      {/* <AuthProvider> */}
        <Router />
      {/* </AuthProvider> */}
    </Suspense>
  )
}

export default App
