import styles from "./index.module.css";
import { LinearProgress } from "@mui/material";

export default function LoadingPage() {
  return (
    <div className={styles.loadingPage}>
      <LinearProgress
        sx={{
          width: "300px",
          borderRadius: "10px",
          backgroundColor: "#333", // barva pozadí progress baru
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#D4AF37", // zlatá (Gold)
          },
        }}
      />
      <p className={styles.loadingText}>Načítám...</p>
    </div>
  );
}
