import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

type NotificationProviderProps = {
  children: React.ReactNode;
};
type NotificationContextValue = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  data: NotificationData;
  id: number;
  showNotification: (newData: NotificationData) => void;
};
type NotificationData = unknown;

const NotificationContext = createContext<NotificationContextValue | undefined>(
  undefined
);

export function NotificationProvider({ children }: NotificationProviderProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [data, setData] = useState<NotificationData>(null);
  const [id, setId] = useState(0);
  const location = useLocation();

  function showNotification(newData: NotificationData) {
    setId((prev) => prev + 1);
    setData(newData);
    setIsVisible(true);
  }
  useEffect(() => {
    setIsVisible(false);
  }, [location]);

  return (
    <NotificationContext.Provider
      value={{
        isVisible,
        setIsVisible,
        data,
        id,
        showNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification(): NotificationContextValue {
  const ctx = useContext(NotificationContext);
  if (!ctx)
    throw new Error("useNotification must be used within NotificationProvider");
  return ctx;
}
