import styles from "./index.module.css";
import { Check, X } from "lucide-react";

export default function OrderItem() {
    return (
        <div className={styles.orderItem}>
            {/* --- Data objednávky --- */}
            <div className={`${styles.spanRows} ${styles.gridCell} ml-4`}>EKC19</div>
            <div className={`${styles.spanRows} ${styles.gridCell}`}>2025-10-09 13:34:08</div>
            <div className={`${styles.spanRows} ${styles.gridCell}`}>David</div>
            <div className={`${styles.spanRows} ${styles.gridCell}`}>Koritar</div>
            <div className={`${styles.spanRows} ${styles.gridCell}`}>koritar.david@seznam.cz</div>
            <div className={`${styles.spanRows} ${styles.gridCell}`}>Z-BOX Brno, Dolní Heršpice, Vídeňská 132/100 (OC Futurum)</div>
            <div className={`${styles.spanRows} ${styles.gridCell} justify-self-center`}>Dobírka</div>
            <div className={`${styles.spanRows} ${styles.gridCell} justify-self-center`}>pickup</div>
            <div className={`${styles.spanRows} ${styles.gridCell} justify-self-center`}>10045</div>
            <div className={`${styles.spanRows} ${styles.gridCell} justify-self-center`}>4</div>

            {/* --- Akce a Status v posledním sloupci --- */}
            <div className={styles.orderActions}>
                <Check className={styles.confirmIcon} size={20} />
                <X className={styles.deleteIcon} size={20} />
            </div>

            <div className={styles.orderStatus}>
                <span >
                    Pending
                </span>
            </div>
        </div>
    );
}