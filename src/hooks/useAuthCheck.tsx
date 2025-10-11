import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { adminAPI, AxiosError } from "../config"; // Importujeme naši novou admin instanci

/**
 * Tento hook ověřuje platnost admin tokenu.
 * Vrací `true`, `false`, nebo `null` během načítání.
 * V případě neplatného tokenu automaticky přesměruje na /login.
 */

export function useAuthCheck() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Vytvoříme AbortController pro případ, že by komponenta zmizela
    // dříve, než se požadavek dokončí, abychom předešli chybám.
    const controller = new AbortController();

    const verifyToken = async () => {
      try {
        // Použijeme adminAPI instanci a její signal pro přerušení
        await adminAPI.get("/admin/verify-auth", {
          signal: controller.signal,
        });

        // Pokud požadavek projde (nevyhodí chybu), token je platný.
        setIsAuthenticated(true);
      } catch (error) {
        const err = error as AxiosError;

        if (err.name === "CanceledError") {
          // Požadavek byl úmyslně přerušen, nic neděláme.
          return;
        }

        // Jakákoliv jiná chyba (401, 403, chyba sítě) znamená, že token je neplatný.
        setIsAuthenticated(false);
        navigate("/login");
      }
    };

    verifyToken();

    // Cleanup funkce, která se zavolá, když komponenta zanikne.
    // Tím se zruší probíhající požadavek.
    return () => {
      controller.abort();
    };
  }, [navigate]);

  return isAuthenticated;
}
