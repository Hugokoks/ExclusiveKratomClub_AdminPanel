import type { FilterData, SortableColumn } from "./types";
import FilterNav from "../../components/FilterNav/FilterNav";
import FilterInput from "../../components/FilterInput/FilterInput";
import FilterSelect from "../../components/FilterSelect/FilterSelect";
import FilterSortable from "../../components/FilterSortable/FilterSortable";
import { createChangeHandler } from "../../utils/eventHandler";

interface OrdersNavProps {
  filters: FilterData;
  onTextChange: (name: keyof FilterData, value: string) => void;
  onSelectChange: (name: keyof FilterData, value: string) => void;
  onSortChange: (newSortBy: SortableColumn) => void;
  onFilterReset: () => void;
}

const ordersGridColumns = "0.8fr 1.8fr 0.8fr 0.8fr 2fr 2.5fr 0.8fr 0.8fr 1fr 0.6fr 1fr";

export default function OrdersNav({
  filters,
  onTextChange,
  onSelectChange,
  onSortChange,
  onFilterReset
}: OrdersNavProps) {

  const handleTextChange = createChangeHandler(onTextChange)
  const handleSelectChange = createChangeHandler(onSelectChange)

  return (
    <FilterNav onFilterReset={onFilterReset} gridTemplateColumns={ordersGridColumns} >

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

      {/* --- Jméno (Text Input) --- */}
      <FilterInput
        label="Jméno"
        name="firstName"
        value={filters.firstName}
        onChange={handleTextChange}
      />

      {/* --- Příjmení (Text Input) --- */}
      <FilterInput
        label="Příjmení"
        name="lastName"
        value={filters.lastName}
        onChange={handleTextChange}
      />

      {/* --- Email (Text Input) --- */}
      <FilterInput
        label="Email"
        name="email"
        value={filters.email}
        onChange={handleTextChange}
      />

      {/* --- Adresa (Text Input) --- */}
      <FilterInput
        label="Adresa doručení"
        name="address"
        value={filters.address}
        onChange={handleTextChange}
      />

      <FilterSelect
        label="Platba"
        name="paymentMethod"
        value={filters.paymentMethod}
        onChange={handleSelectChange}
        options={[
          { value: "", label: "Vše" },
          { value: "payment-dobirka", label: "Dobírka" },
          { value: "payment-prevod", label: "Převod" }
        ]}
      />
      {/* --- Doprava (Dropdown) --- */}

      <FilterSelect
        label="Doprava"
        name="deliveryMethod"
        value={filters.deliveryMethod}
        onChange={handleSelectChange}
        options={[
          { value: "", label: "Vše" },
          { value: "packeta-pickup", label: "Pickup" },
          { value: "packeta-home", label: "Home" }
        ]}
      />

      {/* --- Cena (Sortable) --- */}
      <FilterSortable<SortableColumn>
        currentSortBy={filters.sortBy}
        currentSortOrder={filters.sortOrder}
        onSortChange={onSortChange}
        label="Cena Kč"
        sortValue="price"
      />

      {/* --- Položky (Sortable) --- */}
      <FilterSortable<SortableColumn>
        currentSortBy={filters.sortBy}
        currentSortOrder={filters.sortOrder}
        onSortChange={onSortChange}
        label="Položky"
        sortValue="itemCount"
      />

      {/* --- Stav (Dropdown) --- */}
      <FilterSelect
        label="Stav"
        name="status"
        value={filters.status}
        onChange={handleSelectChange}
        options={[
          { value: "", label: "Vše" },
          { value: "pending", label: "Pending" },
          { value: "canceled", label: "Canceled" },
          { value: "completed", label: "Completed" }
        ]}
      />
    </FilterNav>
  );
}