import styles from "./index.module.css";
import { Search, RotateCcw } from "lucide-react";
import type { FilterData, SortableColumn } from "./types";
import Sortable from "../../components/Sortable/Sortable";

interface OrdersNavProps {
  filters: FilterData;
  onFilterChange: (name: keyof FilterData, value: string) => void;
  onSortChange: (newSortBy: SortableColumn) => void;
  onSearch: () => void;
  onFilterReset: () => void;
}

export default function OrdersNav({
  filters,
  onFilterChange,
  onSortChange,
  onSearch,
  onFilterReset
}: OrdersNavProps) {


  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    onFilterChange(name as keyof FilterData, value);

  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };


  return (
    <form className={styles.orderNav} onSubmit={handleSubmit}>
      <div className={styles.filterButtonBox}>
        <button className={styles.filterBtn} type="submit">
          <Search size={16} />
          <span>Filtrovat</span>
        </button>
        <button
          className={`${styles.filterBtn} ${styles.resetBtn}`}
          onClick={onFilterReset}
        >
          <RotateCcw size={16} />
          <span>Resetovat filter</span>
        </button>
      </div>
      <div className={styles.orderNavFilters}>


        {/* --- ID (Text Input) --- */}
        <div className={`${styles.navHeaderCell} ml-4`}>
          <span>ID</span>
          <input
            type="text"
            placeholder="Filtrovat..."
            className={styles.filterInput}
            name="id"
            value={filters.id}
            onChange={handleChange}
          />
        </div>

        {/* --- Datum (Sortable) --- */}
        <Sortable
          filters={filters}
          onSortChange={onSortChange}
          label="Datum vytvoření"
          sortValue="date"
        />

        {/* --- Jméno (Text Input) --- */}
        <div className={styles.navHeaderCell}>
          <span>Jméno</span>
          <input
            type="text"
            placeholder="Filtrovat..."
            className={styles.filterInput}
            name="firstName"
            value={filters.firstName}
            onChange={handleChange}
          />
        </div>

        {/* --- Příjmení (Text Input) --- */}
        <div className={styles.navHeaderCell}>
          <span>Příjmení</span>
          <input
            type="text"
            placeholder="Filtrovat..."
            className={styles.filterInput}
            name="lastName"
            value={filters.lastName}
            onChange={handleChange}
          />
        </div>

        {/* --- Email (Text Input) --- */}
        <div className={styles.navHeaderCell}>
          <span>Email</span>
          <input
            type="text"
            placeholder="Filtrovat..."
            className={styles.filterInput}
            name="email"
            value={filters.email}
            onChange={handleChange}
          />
        </div>

        {/* --- Adresa (Text Input) --- */}
        <div className={styles.navHeaderCell}>
          <span>Adresa doručení</span>
          <input
            type="text"
            placeholder="Filtrovat..."
            className={styles.filterInput}
            name="address"
            value={filters.address}
            onChange={handleChange}
          />
        </div>

        {/* --- Platba (Dropdown) --- */}
        <div className={styles.navHeaderCell}>
          <span>Platba</span>
          <select
            className={styles.filterSelect}
            name="paymentMethod"
            value={filters.paymentMethod}
            onChange={handleChange}
          >
            <option value="">Vše</option>
            <option value="payment-dobirka">Dobírka</option>
            <option value="payment-prevod">Převod</option>
          </select>
        </div>

        {/* --- Doprava (Sortable) --- */}
        <div className={styles.navHeaderCell}>
          <span>Doprava</span>
          <select
            className={styles.filterSelect}
            name="deliveryMethod"
            value={filters.deliveryMethod}
            onChange={handleChange}
          >
            <option value="">Vše</option>
            <option value="packeta-pickup">pickup</option>
            <option value="packeta-home">home</option>
          </select>
        </div>

        {/* --- Cena (Sortable) --- */}
        <Sortable
          filters={filters}
          onSortChange={onSortChange}
          label="Cena Kč"
          sortValue="price"
          style={"justify-self-center"}
        />


        {/* --- Položky (Sortable) --- */}
        <Sortable
          filters={filters}
          onSortChange={onSortChange}
          label="Položky"
          sortValue="itemCount"

        />

        {/* --- Stav (Dropdown) --- */}
        <div className={styles.navHeaderCell}>
          <span>Stav</span>
          <select
            className={styles.filterSelect}
            name="status"
            value={filters.status}
            onChange={handleChange}
          >
            <option value="">Vše</option>
            <option value="pending">Pending</option>
            <option value="canceled">Canceled</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
    </form>
  );
}
