import ProductItem from "./ProductItem";
import { QueryList } from "../../components/QueryList/QueryList";
import type { Product, FilterData } from "./types";

interface ProductItemListProps {
  filters: FilterData;
}

export default function ProductItemList({ filters }: ProductItemListProps) {
  const renderProduct = (product: Product) => {
    return <ProductItem key={product.id} product={product} />;
  };

  return (
    <QueryList<FilterData, Product>
      filters={filters}
      queryKey="products"
      endpoint="/admin/products"
      notFoundMessage="Nebyly nalezeny žádné produkty."
      renderItem={renderProduct}
    />
  );
}
