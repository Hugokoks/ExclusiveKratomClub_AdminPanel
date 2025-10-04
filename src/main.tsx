import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { NotificationProvider } from "./context/NotificationProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </StrictMode>
  </BrowserRouter>
);
