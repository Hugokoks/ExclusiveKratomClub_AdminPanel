import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Orders from "./pages/Orders/Orders";
import Login from "./pages/Login/Login";

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
}
