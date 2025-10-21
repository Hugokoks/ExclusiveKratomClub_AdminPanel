import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Orders from "./pages/Orders/Orders";
import OrderDetail from "./pages/OrderDetail/OrderDetail";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./ProtectedRoute";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import CardNotification from "./components/CardNotification/CardNotification";

export default function App() {
  return (
    <>
      <CardNotification />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/orders" replace />} />
          <Route
            path="/order/:id"
            element={
              <ProtectedRoute>
                <OrderDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/order"
            element={<Navigate to="/orders" replace />}
          />
        </Routes>
      </Suspense>
    </>
  );
}
