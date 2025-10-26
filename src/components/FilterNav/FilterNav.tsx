import { RotateCcw } from "lucide-react";
import styles from "./index.module.css";


interface FilterNavProps {
    onFilterReset: () => void;
    children: React.ReactNode;
    gridTemplateColumns: string;
}

export default function FilterNav({ onFilterReset, children, gridTemplateColumns }: FilterNavProps) {
    return (

        <div >
            <button
                className={`${styles.filterBtn} ${styles.resetBtn}`}
                onClick={onFilterReset}
                type="button"
            >
                <RotateCcw size={16} />
                <span>Resetovat filter</span>
            </button>
            <div className={styles.filterNav} style={{ gridTemplateColumns: gridTemplateColumns }}>
                {children}
            </div>
        </div>
    );
}