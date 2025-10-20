import styles from "./index.module.css";
import OrderItem from "./OrderItem";
import type { FilterData, SuccessResponse, Order } from "./types";
import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "./api";
import Loading from "../../components/Loading/Loading";
import useNotifyOnError from "../../hooks/useNotifyOnError";
import { memo } from "react"

interface OrderItemListProps {
    filters: FilterData | null;
}

const OrderItemList = memo(function ({ filters }: OrderItemListProps) {
    const {
        data: orders = [],
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["orders", filters],
        queryFn: () => fetchOrders(filters),
        select: (data: SuccessResponse) => data.orders,

        retry: 1,
    });
    useNotifyOnError({ isError, error });

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
                    <div className={styles.message}>Nebyly nalezeny žádné objednávky.</div>
                ) : (
                    orders.map((order: Order) => (
                        <OrderItem key={order.id} order={order} />
                    ))
                )}
            </div>
        </div>
    );
}
)
export default OrderItemList