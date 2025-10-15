import styles from "./index.module.css";
import { ArrowUpDown } from 'lucide-react';
import type { FilterData, SortableColumn } from "./Orders";


interface OrdersNavProps {
  filters: FilterData;
  onFilterChange: (name: keyof FilterData, value: string) => void;
  onSortChange: (newSortBy: SortableColumn) => void
}

export default function OrdersNav({ filters, onFilterChange, onSortChange }: OrdersNavProps) {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

    const { name, value } = event.target;

    onFilterChange(name as keyof FilterData, value);

  };
  return (
    <div className={styles.orderNav}>
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
      <div className={`${styles.navHeaderCell} ${styles.sortableHeader} `} onClick={() => onSortChange('date')}>
        <span>Datum vytvoření</span>
        <ArrowUpDown size={14} />
      </div>

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
          <option value="dobirka">Dobírka</option>
          <option value="prevod">Převod</option>
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
          <option value="pickup">pickup</option>
          <option value="home">home</option>
        </select>
      </div>

      {/* --- Cena (Sortable) --- */}
      <div className={`${styles.navHeaderCell} ${styles.sortableHeader} justify-self-center`} onClick={() => onSortChange('price')}>
        <span>Cena Kč</span>
        <ArrowUpDown size={14} />
      </div>

      {/* --- Položky (Sortable) --- */}
      <div className={`${styles.navHeaderCell} ${styles.sortableHeader}`} onClick={() => onSortChange('itemCount')}>
        <span>Položky</span>
        <ArrowUpDown size={14} />
      </div>

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
  );
}