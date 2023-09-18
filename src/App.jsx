import { Suspense } from "react"
import Router from "./Router"

function App() {

  return (
    <Suspense fallback="loading..">
      <Router/>
    </Suspense>
  )
}

export default App
