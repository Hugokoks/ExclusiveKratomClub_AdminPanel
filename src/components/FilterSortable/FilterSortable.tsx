// src/components/Sortable/FilterSortable.tsx

import styles from "./index.module.css"; // Vlastní CSS modul
import SortArrow from "./SortArrow";


interface SortableProps<S extends string> {
    onSortChange: (newSortBy: S) => void;
    label: string;
    sortValue: S; // Hodnota tohoto sloupce (např. "date")
    currentSortBy: S; // Podle čeho se teď řadí (např. "price")
    currentSortOrder: 'asc' | 'desc'; // Jak se řadí
    style?: string;
}

export default function FilterSortable<S extends string>({
    onSortChange,
    label,
    sortValue,
    currentSortBy,
    currentSortOrder,
    style = ""
}: SortableProps<S>) {

    return (
        <div

            className={`${styles.navHeaderCell} ${styles.sortableHeader} ${style}`}
            onClick={() => onSortChange(sortValue)}
        >
            <span>{label}</span>
            <SortArrow
                column={sortValue}
                sortBy={currentSortBy}
                sortOrder={currentSortOrder}
            />
        </div>
    );
}