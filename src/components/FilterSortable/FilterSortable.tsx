// src/components/Sortable/FilterSortable.tsx

import styles from "./index.module.css"; // Vlastní CSS modul
import SortArrow from "./SortArrow";


interface SortableProps<SortableColumn> {
    onSortChange: (newSortBy: SortableColumn) => void;
    label: string;
    sortValue: SortableColumn; // Hodnota tohoto sloupce (např. "date")
    currentSortBy: SortableColumn; // Podle čeho se teď řadí (např. "price")
    currentSortOrder: 'asc' | 'desc'; // Jak se řadí
    style?: string;
}

export default function FilterSortable<SortableColumn>({
    onSortChange,
    label,
    sortValue,
    currentSortBy,
    currentSortOrder,
    style = ""
}: SortableProps<SortableColumn>) {

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