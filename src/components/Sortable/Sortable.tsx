import styles from "./index.module.css"
import SortArrow from "./SortArrow"
import type { FilterData, SortableColumn } from "../../pages/Orders/types"

interface SortableProps {
    filters: FilterData,
    onSortChange: (newSortBy: SortableColumn) => void;
    label: string;
    sortValue: SortableColumn;
    style?: string
}


export default function Sortable({ onSortChange, filters, label, sortValue, style = "" }: SortableProps) {
    return (
        <div
            className={`${styles.navHeaderCell} ${styles.sortableHeader} ${style}`}
            onClick={() => onSortChange(sortValue)}
        >
            <span>{label}</span>
            <SortArrow column={sortValue} sortBy={filters.sortBy} sortOrder={filters.sortOrder} />
        </div>
    )
}