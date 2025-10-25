import styles from "./index.module.css";
import { Check, X, SquarePen, RotateCw } from "lucide-react";
import type { Order, OrderStatus } from "./types";
import usePatchOrder from "../../hooks/usePatchOrder";
import useNotifyOnError from "../../hooks/useNotifyOnError";
import useLoadOnPending from "../../hooks/useLoadOnPending";
import { Link } from "react-router-dom";

interface OrderItemProps {
  order: Order;
}

export default function OrderItem({ order }: OrderItemProps) {
  const { pathOrder, isPending, error, isError } = usePatchOrder({
    queryKey: "orders",
  });
  useNotifyOnError({ isError, error });
  useLoadOnPending(isPending);

  function handlePatch(e: React.MouseEvent, operation: OrderStatus) {
    e.stopPropagation();
    e.preventDefault();
    pathOrder({ id: order.id, status: operation });
  }
  const handleConfirm = (e: React.MouseEvent) => {
    handlePatch(e, "completed");
  };

  const handleCancel = (e: React.MouseEvent) => {
    handlePatch(e, "canceled");
  };

  const handleReset = (e: React.MouseEvent) => {
    handlePatch(e, "pending");
  };

  return (
    <Link
      to={`/orders/${order.id}`}
      className={`${styles.orderItem} ${
        order.status === "canceled" && styles.orderItemCanceled
      } ${order.status === "completed" && styles.orderItemCompleted}`}
    >
      {/* --- Data objednávky --- */}
      <div className={`${styles.spanRows} ${styles.gridCell} ml-4`}>
        {order.id}
      </div>
      <div className={`${styles.spanRows} ${styles.gridCell}`}>
        {order.createdAt}
      </div>
      <div className={`${styles.spanRows} ${styles.gridCell}`}>
        {order.firstName}
      </div>
      <div className={`${styles.spanRows} ${styles.gridCell}`}>
        {order.lastName}
      </div>
      <div className={`${styles.spanRows} ${styles.gridCell}`}>
        {order.email}
      </div>
      <div className={`${styles.spanRows} ${styles.gridCell}`}>
        {order.deliveryAddress}
      </div>
      <div
        className={`${styles.spanRows} ${styles.gridCell} justify-self-center`}
      >
        {order.paymentMethod}
      </div>
      <div
        className={`${styles.spanRows} ${styles.gridCell} justify-self-center`}
      >
        {order.deliveryMethod}
      </div>
      <div
        className={`${styles.spanRows} ${styles.gridCell} justify-self-center`}
      >
        {order.totalPrice}
      </div>
      <div
        className={`${styles.spanRows} ${styles.gridCell} justify-self-center`}
      >
        {order.itemCount}
      </div>

      <div className={styles.orderStatus}>
        <span>{order.status}</span>
      </div>

      {/* --- Akce a Status*/}
      <div className={styles.actionsCell}>
        <div className={styles.actionsBubble}>
          <button onClick={handleConfirm} className={styles.bubbleButton}>
            <Check size={16} className={styles.confirmIcon} />
          </button>
          <button onClick={handleCancel} className={styles.bubbleButton}>
            <X size={16} className={styles.deleteIcon} />
          </button>
          <button onClick={handleReset} className={styles.bubbleButton}>
            <RotateCw size={16} className={styles.resetIcon} />
          </button>
        </div>

        <SquarePen className={styles.editIcon} size={20} />
      </div>
    </Link>
  );
}
