import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Orders from "./pages/Orders"


export default function App() {

  return (

    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Suspense>


  )

}