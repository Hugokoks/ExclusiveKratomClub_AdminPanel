import styles from "./index.module.css";
import OrderItem from "./OrderItem";
import type { FilterData, Order } from "./types";
import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "./api";
import Loading from "../../components/Loading/Loading";
import useNotifyOnError from "../../hooks/useNotifyOnError";
import { memo, useEffect } from "react";
import { useNotification } from "../../context/NotificationProvider";

interface OrderItemListProps {
  filters: FilterData | null;
}

const OrderItemList = memo(function ({ filters }: OrderItemListProps) {
  const { showNotification } = useNotification();
  const queryKey = ["orders", filters];
  const { data, isLoading, isError, error } = useQuery({
    queryKey: queryKey,
    queryFn: () => fetchOrders(filters),
    //select: (data: SuccessResponse) => data.orders,
    retry: 1,
  });

  ////obecny error notify ne pro 404
  useNotifyOnError({ isError, error });

  ////nastaveni promenych ze success responsu;
  const orders = data?.orders ?? [];
  const responseStatus = data?.status;
  const responseMessage = data?.message;
  const responseValid = data?.valid;

  ////error navic pri 404
  useEffect(() => {
    if (responseValid === false) {
      showNotification({
        status: responseStatus,
        message: responseMessage,
      });
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="mt-50">
        <Loading />
      </div>
    );
  }

  return (
    <div className={styles.orderItemList}>
      <div className={styles.orderItemList}>
        {orders.length === 0 ? (
          <div className={styles.message}>
            Nebyly nalezeny žádné objednávky.
          </div>
        ) : (
          orders.map((order: Order) => (
            <OrderItem key={order.id} order={order} />
          ))
        )}
      </div>
    </div>
  );
});
export default OrderItemList;
