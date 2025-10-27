import FilterNav from "../../components/FilterNav/FilterNav";
import type { FilterData, SortableColumn } from "./types"
import FilterInput from "../../components/FilterInput/FilterInput";
import FilterSelect from "../../components/FilterSelect/FilterSelect";
import FilterSortable from "../../components/FilterSortable/FilterSortable";
import { createChangeHandler } from "../../utils/eventHandler";

interface ProductNavProps {
    filters: FilterData;
    onTextChange: (name: keyof FilterData, value: string) => void;
    onSelectChange: (name: keyof FilterData, value: string) => void;
    onSortChange: (newSortBy: SortableColumn) => void;
    onFilterReset: () => void;

}


const productFilterGrid = "0.4fr 0.6fr 0.8fr 0.5fr 0.7fr 0.4fr 0.4fr 0.4fr 0.4fr";
export default function ProductsNav({
    filters,
    onTextChange,
    onSelectChange,
    onSortChange,
    onFilterReset
}: ProductNavProps) {

    const handleTextChange = createChangeHandler(onTextChange);
    const handleSelectChange = createChangeHandler(onSelectChange)

    return (
        <FilterNav onFilterReset={onFilterReset} gridTemplateColumns={productFilterGrid}>

            {/* --- ID (Text Input) --- */}
            <FilterInput
                label="ID"
                name="id"
                value={filters.id}
                onChange={handleTextChange}
                style="ml-2"
            />

            {/* --- Datum (Sortable) --- */}
            <FilterSortable<SortableColumn>
                currentSortBy={filters.sortBy}
                currentSortOrder={filters.sortOrder}
                onSortChange={onSortChange}
                label="Datum vytvoření"
                sortValue="date"
            />
            {/* --- Name (Text Input) --- */}
            <FilterInput
                label="Name"
                name="name"
                value={filters.name}
                onChange={handleTextChange}

            />
            {/* --- Category (DropDown) --- */}
            <FilterSelect
                label="Category"
                name="category"
                value={filters.category}
                onChange={handleSelectChange}
                options={[
                    { value: "", label: "Vše" },
                    { value: "kratom", label: "Kratom" },
                    { value: "prislusenstvi", label: "Příslušenství" }
                ]}
            />

            {/* --- Type (Text Input) --- */}
            <FilterInput
                label="Type"
                name="type"
                value={filters.type}
                onChange={handleTextChange}
            />

            {/* --- Label (DropDown) --- */}
            <FilterSelect
                label="Label"
                name="label"
                value={filters.label}
                onChange={handleSelectChange}
                options={[
                    { value: "", label: "Vše" },
                    { value: "bestseller", label: "bestseller" },
                    { value: "sale", label: "sale" },
                    { value: "new", label: "new" },
                ]}
            />

            {/* --- stock (Sortable) --- */}
            <FilterSortable<SortableColumn>
                currentSortBy={filters.sortBy}
                currentSortOrder={filters.sortOrder}
                onSortChange={onSortChange}
                label="Stock"
                sortValue="stock"
            />

            {/* --- reserved stock (Sortable) --- */}
            <FilterSortable<SortableColumn>
                currentSortBy={filters.sortBy}
                currentSortOrder={filters.sortOrder}
                onSortChange={onSortChange}
                label="Reserved"
                sortValue="reservedStock"
            />

            {/* --- kind (DropDown) --- */}
            <FilterSelect
                label="Kind"
                name="kind"
                value={filters.kind}
                onChange={handleSelectChange}
                options={[
                    { value: "", label: "Vše" },
                    { value: "bulk", label: "bulk" },
                    { value: "piece", label: "piece" },
                ]}
            />
        </FilterNav>
    );
}