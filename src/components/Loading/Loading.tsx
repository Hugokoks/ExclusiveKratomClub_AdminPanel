import { LinearProgress } from "@mui/material";
import styles from "./index.module.css"



export default function Loading() {

    return <div className={styles.loaderBox} >

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




}