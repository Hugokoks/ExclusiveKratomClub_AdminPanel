import styles from "./index.module.css";
import { LinearProgress } from "@mui/material";

export default function FullScreenLoader() {
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
