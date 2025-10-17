import styles from "./index.module.css";
import OrderItem from "./OrderItem";
import type { FilterData, Order } from "./Orders";
import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "./api";
import Loading from "../../components/Loading/Loading";
import useNotifyOnError from "../../hooks/useNotifyOnError";

interface OrderItemListProps {
  filters: FilterData | null;
}

export default function OrderItemList({ filters }: OrderItemListProps) {
  const {
    data: orders,
    isLoading,
    isError,
    error,
  } = useQuery<Order[]>({
    queryKey: ["orders", filters],
    queryFn: () => fetchOrders(filters),
  });

  useNotifyOnError({ isError, error });

  /*
  if (isLoading) {
    return (
      <div className="mt-50">
        <Loading />
      </div>
    );
  }
     */

  return (
    <div className={styles.orderItemList}>
      <OrderItem />
      <OrderItem />
    </div>
  );
}
