import ViewScreen from "../../components/ViewScreen/ViewScreen";
import { useFilterSync } from "../../hooks/useFilterSync";
import ProductItemList from "./ProductItemList";
import ProductsNav from "./ProductsNav";
import type { FilterData, SortableColumn } from "./types";
import { initFilterData } from "./types";

const buildFiltersFromParams = (params: URLSearchParams): FilterData => {
  return {
    id: params.get("id") || "",
    name: params.get("name") || "",
    category: params.get("category") || "",
    type: params.get("type") || "",
    label: params.get("label") || "",
    kind: params.get("kind") || "",
    sortBy: (params.get("sortBy") as SortableColumn) || "date",
    sortOrder: (params.get("sortOrder") as "asc" | "desc") || "desc",
  };
};
export default function Products() {
  const {
    inputFilters,
    queryFilters,
    handleTextChange,
    handleSelectChange,
    handleSortChange,
    handleResetFilters,
  } = useFilterSync<FilterData, SortableColumn>(
    initFilterData,
    buildFiltersFromParams
  );

  return (
    <ViewScreen>
      <div className="flex flex-col px-5 py-0">
        <ProductsNav
          onFilterReset={handleResetFilters}
          onSelectChange={handleSelectChange}
          onSortChange={handleSortChange}
          onTextChange={handleTextChange}
          filters={inputFilters}
        />
        <ProductItemList filters={queryFilters} />
      </div>
    </ViewScreen>
  );
}
