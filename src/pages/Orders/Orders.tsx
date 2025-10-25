import { useState, useEffect } from "react"; // Ujisti se, že máš i useEffect
import { useSearchParams } from "react-router-dom"; // Náš nový import
import ViewScreen from "../../components/ViewScreen/ViewScreen";
import styles from "./index.module.css";
import OrderItemList from "./OrderItemList";
import OrdersNav from "./OrdersNav";
import type { FilterData, SortableColumn } from "./types";
import { initFilterData } from "./types";

// POMOCNÁ FUNKCE: Převede searchParams na náš FilterData objekt
const buildFiltersFromParams = (params: URLSearchParams): FilterData => {
  return {
    id: params.get("id") || "",
    firstName: params.get("firstName") || "",
    lastName: params.get("lastName") || "",
    email: params.get("email") || "",
    address: params.get("address") || "",
    paymentMethod: params.get("paymentMethod") || "",
    deliveryMethod: params.get("deliveryMethod") || "",
    status: params.get("status") || "",
    sortBy: (params.get("sortBy") as SortableColumn) || "date",
    sortOrder: (params.get("sortOrder") as "asc" | "desc") || "desc",
  };
};

// POMOCNÁ FUNKCE: Vyčistí filtry od prázdných a výchozích hodnot
const cleanFilters = (filters: FilterData) => {
  const cleaned: Record<string, string> = {};
  (Object.keys(filters) as Array<keyof FilterData>).forEach((key) => {
    // Nepřidávej prázdné stringy
    if (filters[key] !== "") {
      // Nepřidávej výchozí hodnoty řazení
      if (key === "sortBy" && filters[key] === "date") return;
      if (key === "sortOrder" && filters[key] === "desc") return;

      cleaned[key] = filters[key];
    }
  });
  return cleaned;
};

export default function Orders() {
  const [searchParams, setSearchParams] = useSearchParams();

  // queryFilters (to, co se posílá do API) je teď PŘÍMO ODVOZENO z URL
  const queryFilters = buildFiltersFromParams(searchParams);

  // inputFilters (to, co je ve formuláři) držíme v lokálním stavu.
  //    Inicializujeme ho z queryFilters.
  const [inputFilters, setInputFilters] = useState<FilterData>(queryFilters);

  // SYNCHRONIZACE: Pokud se změní URL (např. tlačítko zpět),
  useEffect(() => {
    setInputFilters(buildFiltersFromParams(searchParams));
  }, [searchParams]);

  const handleSearch = () => {
    // nastavíme URL parametry
    setSearchParams(cleanFilters(inputFilters));
  };

  const handleFilterChange = (name: keyof FilterData, value: string) => {
    setInputFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSortChange = (newSortBy: SortableColumn) => {
    const newSortOrder: "asc" | "desc" =
      inputFilters.sortBy === newSortBy && inputFilters.sortOrder === "desc"
        ? "asc"
        : "desc";

    const newFilters = {
      ...inputFilters,
      sortBy: newSortBy,
      sortOrder: newSortOrder,
    };

    setInputFilters(newFilters);
    setSearchParams(cleanFilters(newFilters));
  };

  const handleResetFilters = () => {
    setInputFilters(initFilterData);
    setSearchParams(cleanFilters(initFilterData));
  };

  return (
    <ViewScreen>
      <div className={styles.ordersPage}>
        <div className={styles.ordersContentWrapper}>
          <OrdersNav
            filters={inputFilters} // Navigace používá lokální stav inputů
            onFilterChange={handleFilterChange}
            onSortChange={handleSortChange}
            onSearch={handleSearch}
            onFilterReset={handleResetFilters}
          />
          {/* Seznam objednávek používá stav odvozený z URL */}
          <OrderItemList filters={queryFilters} />
        </div>
      </div>
    </ViewScreen>
  );
}
