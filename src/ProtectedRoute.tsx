import React from "react";
import { useAuthCheck } from "./hooks/useAuthCheck";
import LoadingPage from "./components/LoadingPage/LoadingPage";

// Definice typů pro props, v tomto případě pro 'children'
interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // Zavoláme náš hook, který se postará o veškerou logiku
  const isAuthenticated = useAuthCheck();

  // 1. Pokud je stav `null`, znamená to, že se ověřuje token.
  //    Zobrazíme načítací zprávu, abychom zabránili probliknutí obsahu.
  if (isAuthenticated === null) {
    return <LoadingPage />;
  }

  // 2. Pokud je stav `true`, uživatel je v pořádku. Zobrazíme chráněný obsah.
  // 3. Pokud je stav `false`, hook už zařídil přesměrování na /login.
  //    Komponenta tedy nemusí zobrazit nic (vrátí null).
  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;
