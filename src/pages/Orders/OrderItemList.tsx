import OrderItem from "./OrderItem";
import type { FilterData, Order } from "./types";
import { QueryList } from "../../components/QueryList/QueryList";

interface OrderItemListProps {
  filters: FilterData | null;
}

// Komponenta se teď stará jen o to, JAK vykreslit JEDEN order
export default function OrderItemList({ filters }: OrderItemListProps) {
  const renderOrder = (order: Order) => {
    return <OrderItem key={order.id} order={order} />;
  };

  return (
    <QueryList<FilterData, Order>
      filters={filters}
      queryKey="orders"
      endpoint="/admin/orders"
      notFoundMessage="Nebyly nalezeny žádné objednávky."
      renderItem={renderOrder}
    />
  );
}
