import { useState } from "react";
import ViewScreen from "../../components/ViewScreen/ViewScreen";
import styles from "./index.module.css";
import OrderItemList from "./OrderItemList";
import OrdersNav from "./OrdersNav";
import type { FilterData, SortableColumn } from "./types";
import { initFilterData } from "./types";


export default function Orders() {
  const [inputFilters, setInputFilters] = useState<FilterData>(initFilterData);
  const [queryFilters, setQueryFilters] = useState<FilterData>(initFilterData);

  const handleSearch = () => {
    setQueryFilters(inputFilters);
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
    setQueryFilters(newFilters);
  };

  const handleResetFilters = () => {

    setInputFilters(initFilterData);
    setQueryFilters(initFilterData);
  };

  return (
    <ViewScreen>
      <div className={styles.ordersPage}>
        <div className={styles.ordersContentWrapper}>
          <OrdersNav
            filters={inputFilters}
            onFilterChange={handleFilterChange}
            onSortChange={handleSortChange}
            onSearch={handleSearch}
            onFilterReset={handleResetFilters}
          />
          <OrderItemList filters={queryFilters} />
        </div>
      </div>
    </ViewScreen>
  );
}

