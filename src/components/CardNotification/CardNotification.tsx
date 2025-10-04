import styles from "./index.module.css";
import { useNotification } from "../../context/NotificationProvider";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function CardNotification() {
  const { isVisible, setIsVisible, data, id } = useNotification();

  useEffect(() => {
    if (!isVisible || !data) return;
    const timeout = setTimeout(() => setIsVisible(false), 3000);

    return () => clearTimeout(timeout);
  }, [id]);

  if (!isVisible || !data) return null;

  return (
    <motion.div
      key={id} // unikátní klíč pro rerender
      className={`
        ${data?.status === "error" && styles.errorStyle} 
        ${data?.status === "ok" && styles.successStyle}
        ${styles.cartNotification}
        
        `}
      initial={{ opacity: 0, x: 20 }} // zprava
      animate={{ opacity: 1, x: 0 }} // na místo
      exit={{ opacity: 0, x: 20 }} // zpátky doprava
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <button onClick={() => setIsVisible(false)}>✕</button>
      <p>{data?.message}</p>
    </motion.div>
  );
}
