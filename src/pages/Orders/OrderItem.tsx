import styles from "./index.module.css";
import { Check, X, SquarePen, RotateCw } from "lucide-react";

export default function OrderItem() {
  const handleConfirm = () => console.log("Confirming order:");
  const handleCancel = () => console.log("Canceling order:");
  const handleReset = () => console.log("Resetting order:");
  return (
    <div className={styles.orderItem}>
      {/* --- Data objednávky --- */}
      <div className={`${styles.spanRows} ${styles.gridCell} ml-4`}>EKC19</div>
      <div className={`${styles.spanRows} ${styles.gridCell}`}>
        2025-10-09 13:34:08
      </div>
      <div className={`${styles.spanRows} ${styles.gridCell}`}>David</div>
      <div className={`${styles.spanRows} ${styles.gridCell}`}>Koritar</div>
      <div className={`${styles.spanRows} ${styles.gridCell}`}>
        koritar.david@seznam.cz
      </div>
      <div className={`${styles.spanRows} ${styles.gridCell}`}>
        Z-BOX Brno, Dolní Heršpice, Vídeňská 132/100 (OC Futurum)
      </div>
      <div
        className={`${styles.spanRows} ${styles.gridCell} justify-self-center`}
      >
        Dobírka
      </div>
      <div
        className={`${styles.spanRows} ${styles.gridCell} justify-self-center`}
      >
        pickup
      </div>
      <div
        className={`${styles.spanRows} ${styles.gridCell} justify-self-center`}
      >
        10045
      </div>
      <div
        className={`${styles.spanRows} ${styles.gridCell} justify-self-center`}
      >
        4
      </div>

      <div className={styles.orderStatus}>
        <span>Pending</span>
      </div>
      {/* --- Akce a Status v posledním sloupci --- */}
      <div className={styles.actionsCell}>
        <div className={styles.actionsBubble}>
          <button onClick={handleConfirm} className={styles.bubbleButton}>
            <Check size={16} className={styles.confirmIcon} />
          </button>
          <button onClick={handleCancel} className={styles.bubbleButton}>
            <X size={16} className={styles.deleteIcon} />
          </button>
          <button onClick={handleReset} className={styles.bubbleButton}>
            <RotateCw size={16} className={styles.resetIcon} />
          </button>
        </div>

        <SquarePen className={styles.editIcon} size={20} />
      </div>
    </div>
  );
}
