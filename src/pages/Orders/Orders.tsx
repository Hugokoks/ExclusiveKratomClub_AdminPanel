import { useEffect, useState } from "react";
import ViewScreen from "../../components/ViewScreen/ViewScreen";
import styles from "./index.module.css";
import OrderItemList from "./OrderItemList";
import OrdersNav from "./OrdersNav";

export type SortableColumn = "date" | "price" | "itemCount";

export interface FilterData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  paymentMethod: string;
  deliveryMethod: string;
  status: string;
  sortBy: SortableColumn;
  sortOrder: "asc" | "desc";
}
export interface Order {
  id: string;
  createdAt: string; // Datum přijde z JSONu jako string
  firstName: string;
  lastName: string;
  email: string;
  deliveryAddress: string;
  paymentMethod: string;
  deliveryMethod: string;
  totalPrice: number;
  itemCount: number;
  status: "Pending" | "Canceled" | "Completed";
}

const initFilterData: FilterData = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  paymentMethod: "",
  deliveryMethod: "",
  status: "",
  sortBy: "date",
  sortOrder: "desc",
};

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
    setInputFilters((prevFilters) => ({
      ...prevFilters,
      sortBy: newSortBy,
      // Pokud klikáme na stejný sloupec, otočíme směr řazení.
      // Jinak nastavíme výchozí sestupné řazení (desc).
      sortOrder:
        prevFilters.sortBy === newSortBy && prevFilters.sortOrder === "desc"
          ? "asc"
          : "desc",
    }));
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
          />
          <OrderItemList filters={queryFilters} />
        </div>
      </div>
    </ViewScreen>
  );
}
