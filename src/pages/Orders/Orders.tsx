import ViewScreen from "../../components/ViewScreen/ViewScreen";
import OrderItemList from "./OrderItemList";
import OrdersNav from "./OrdersNav";
import type { FilterData, SortableColumn } from "./types";
import { initFilterData } from "./types";
import { useFilterSync } from "../../hooks/useFilterSync";


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

  const {
    inputFilters,
    queryFilters,
    handleTextChange,
    handleSelectChange,
    handleSortChange,
    handleResetFilters,
  } = useFilterSync<FilterData, SortableColumn>(
    initFilterData,
    buildFiltersFromParams,
    cleanFilters
  );


  return (
    <ViewScreen>
      <div className="flex flex-col px-5 py-0">
        <OrdersNav
          filters={inputFilters}
          onTextChange={handleTextChange}
          onSortChange={handleSortChange}
          onFilterReset={handleResetFilters}
          onSelectChange={handleSelectChange}
        />
        {/* Seznam objednávek používá stav odvozený z URL */}
        <OrderItemList filters={queryFilters} />
      </div>
    </ViewScreen>
  );
}