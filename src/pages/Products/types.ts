export type SortableColumn = "date" | "stock" | "reservedStock";

export interface FilterData {
  id: string;
  name: string;
  category: string;
  type: string;
  label: string;
  kind: string;
  sortBy: SortableColumn;
  sortOrder: "asc" | "desc";
}

export interface Product {
  id: string;
  createdAt: string;
  name: string;
  category: string;
  type: string;
  label: string;
  stock: number;
  reserved: number;
  kind: string;
}

const initFilterData: FilterData = {
  id: "",
  name: "",
  category: "",
  type: "",
  label: "",
  kind: "",
  sortBy: "date",
  sortOrder: "desc",
};

export { initFilterData };
