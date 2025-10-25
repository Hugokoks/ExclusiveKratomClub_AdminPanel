import { createContext, useContext, useState } from "react";

interface FullScreenLoaderContextValue {
  isLoading: boolean;
  setLoadingState: (loading: boolean) => void;
}

const FullScreenLoaderContext =
  createContext<FullScreenLoaderContextValue | null>(null);

export function FullScreenLoaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function setLoadingState(loading: boolean) {
    setIsLoading(loading);
  }

  return (
    <FullScreenLoaderContext.Provider value={{ isLoading, setLoadingState }}>
      {children}
    </FullScreenLoaderContext.Provider>
  );
}

export function useFullScreenLoader() {
  const context = useContext(FullScreenLoaderContext);
  if (!context) {
    throw new Error(
      "useFullScreenLoader must be used within a FullScreenLoaderProvider"
    );
  }
  return context;
}
