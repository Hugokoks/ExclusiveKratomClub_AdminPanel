import styles from "./index.module.css";
import { Check, X, RotateCw } from "lucide-react";


export default function OrderHeader() {

    const iconSize = 22;
    return (
        <div className={styles.orderHeader}>
            <h1 className="text-xl font-bold">Objednávka: <span>EKC-160</span></h1>
            <div className="flex mt-2 items-center">
                <span className={styles.statusHeader}>Pending</span>

                {/* btns wrapper */}
                <div className="flex gap-5 ml-auto mr-20">
                    <button className={styles.statusBtn}>
                        <Check size={iconSize} color="rgb(20, 210, 20)" />
                        Potvrdit objednávku
                    </button>
                    <button className={styles.statusBtn}>
                        <X size={iconSize} color="rgb(253, 55, 55)" />

                        Stornovat objednávku
                    </button>
                    <button className={styles.statusBtn}>
                        <RotateCw size={iconSize} color="rgba(13, 109, 212, 0.666)" />
                        Vratit na pending
                    </button>
                </div>
            </div>
            <span className="mt-2">Vytvořeno: <span className="font-bold">2025-10-19 13:38:13</span></span>
        </div >
    );
}