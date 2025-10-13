import styles from "./index.module.css";
// 💡 Importujeme ikonu pro řazení
import { ArrowUpDown } from 'lucide-react';

export default function OrdersNav() {
  return (
    <div className={styles.orderNav}>
      {/* --- ID (Text Input) --- */}
      <div className={`${styles.navHeaderCell} ml-2`}>
        <span>ID</span>
        <input type="text" placeholder="Filtrovat..." className={styles.filterInput} />
      </div>

      {/* --- Datum (Sortable) --- */}
      <div className={`${styles.navHeaderCell} ${styles.sortableHeader} `}>
        <span>Datum vytvoření</span>
        <ArrowUpDown size={14} />
      </div>

      {/* --- Jméno (Text Input) --- */}
      <div className={styles.navHeaderCell}>
        <span>Jméno</span>
        <input type="text" placeholder="Filtrovat..." className={styles.filterInput} />
      </div>

      {/* --- Příjmení (Text Input) --- */}
      <div className={styles.navHeaderCell}>
        <span>Příjmení</span>
        <input type="text" placeholder="Filtrovat..." className={styles.filterInput} />
      </div>

      {/* --- Email (Text Input) --- */}
      <div className={styles.navHeaderCell}>
        <span>Email</span>
        <input type="text" placeholder="Filtrovat..." className={styles.filterInput} />
      </div>

      {/* --- Adresa (Text Input) --- */}
      <div className={styles.navHeaderCell}>
        <span>Adresa doručení</span>
        <input type="text" placeholder="Filtrovat..." className={styles.filterInput} />
      </div>

      {/* --- Platba (Dropdown) --- */}
      <div className={styles.navHeaderCell}>
        <span>Platba</span>
        <select className={styles.filterSelect}>
          <option value="">Vše</option>
          <option value="dobirka">Dobírka</option>
          <option value="prevod">Převod</option>
        </select>
      </div>

      {/* --- Doprava (Sortable) --- */}
      <div className={`${styles.navHeaderCell} ${styles.sortableHeader} justify-self-center`}>
        <span>Doprava</span>
        <ArrowUpDown size={14} />
      </div>

      {/* --- Cena (Sortable) --- */}
      <div className={`${styles.navHeaderCell} ${styles.sortableHeader} justify-self-center`}>
        <span>Cena Kč</span>
        <ArrowUpDown size={14} />
      </div>

      {/* --- Položky (Sortable) --- */}
      <div className={`${styles.navHeaderCell} ${styles.sortableHeader}`}>
        <span>Položky</span>
        <ArrowUpDown size={14} />
      </div>

      {/* --- Stav (Dropdown) --- */}
      <div className={styles.navHeaderCell}>
        <span>Stav</span>
        <select className={styles.filterSelect}>
          <option value="">Vše</option>
          <option value="pending">Pending</option>
          <option value="canceled">Canceled</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  );
}