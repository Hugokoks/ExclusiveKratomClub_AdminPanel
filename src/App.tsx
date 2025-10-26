import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Orders from "./pages/Orders/Orders";
import OrderDetail from "./pages/OrderDetail/OrderDetail";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./ProtectedRoute";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import CardNotification from "./components/CardNotification/CardNotification";
import FullScreenLoader from "./components/FullScreenLoader/FullScreenLoader";
import NotFound from "./components/NotFound/NotFound";
import Products from "./pages/Products/Products";

export default function App() {
  return (
    <>
      <FullScreenLoader />
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
            path="/orders/:id"
            element={
              <ProtectedRoute>
                <OrderDetail />
              </ProtectedRoute>
            }
          />

          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />

          {/* 404 Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
