// src/components/Sortable/SortArrow.tsx

import styles from "./index.module.css"; // Bude mít vlastní CSS modul
import { motion } from "framer-motion";
import { ArrowUpDown, ArrowUp } from "lucide-react";
import React from "react";

interface SortArrowProps<S extends string> {
    column: S;
    sortBy: S;
    sortOrder: 'asc' | 'desc';
}

export default React.memo(function SortArrow<S extends string>({
    column,
    sortBy,
    sortOrder
}: SortArrowProps<S>) {

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
});