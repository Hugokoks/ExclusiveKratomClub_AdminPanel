import styles from "./index.module.css";
import { LinearProgress } from "@mui/material";
import { useFullScreenLoader } from "../../context/FullScreenLoaderProvider";

export default function FullScreenLoader() {
  const { isLoading } = useFullScreenLoader();

  if (!isLoading) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.loaderBox}>
        <LinearProgress
          sx={{
            width: "300px",
            borderRadius: "10px",
            backgroundColor: "#333",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#D4AF37",
            },
          }}
        />
        <p className={styles.loadingText}>Načítám...</p>
      </div>
    </div>
  );
}
