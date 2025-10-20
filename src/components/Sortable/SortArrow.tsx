import styles from "./index.module.css"
import { motion } from "framer-motion"
import { ArrowUpDown, ArrowUp } from "lucide-react";
import type { SortableColumn } from "../../pages/Orders/types";
interface SortArrowProps {
    column: SortableColumn;
    sortBy: SortableColumn;
    sortOrder: 'asc' | 'desc';
}

// Obalíme ji do 'memo', aby se překreslila jen, když se změní její vlastní props
export default function SortArrow({ column, sortBy, sortOrder }: SortArrowProps) {
    if (sortBy !== column) {
        return <ArrowUpDown size={14} className={styles.inactiveSortIcon} />;
    }

    return (
        <motion.div
            key={sortOrder}
            initial={{ rotate: sortOrder === 'asc' ? 180 : 0 }}
            animate={{ rotate: sortOrder === 'asc' ? 0 : 180 }}
            transition={{ duration: 0.2 }}
        >
            <ArrowUp size={14} className={styles.activeSortIcon} />
        </motion.div>
    );
};