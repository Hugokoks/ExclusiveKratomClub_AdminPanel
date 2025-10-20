import styles from "./index.module.css";
import { Check, X, SquarePen, RotateCw } from "lucide-react";
import type { Order, OrderStatus } from "./types";
import usePatchOrder from "../../hooks/usePatchOrder";
import useNotifyOnError from "../../hooks/useNotifyOnError";


interface OrderItemProps {
  order: Order
}

export default function OrderItem({ order }: OrderItemProps) {


  const { pathOrder, isPending, error, isError } = usePatchOrder();
  useNotifyOnError({ isError, error });


  function handlePatch(operation: OrderStatus) {

    pathOrder({ id: order.id, status: operation })
  }
  const handleConfirm = () => handlePatch("completed");
  const handleCancel = () => handlePatch("canceled");
  const handleReset = () => handlePatch("pending");


  return (
    <div className={styles.orderItem}>
      {/* --- Data objednávky --- */}
      <div className={`${styles.spanRows} ${styles.gridCell} ml-4`}>{order.id}</div>
      <div className={`${styles.spanRows} ${styles.gridCell}`}>
        {order.createdAt}
      </div>
      <div className={`${styles.spanRows} ${styles.gridCell}`}>{order.firstName}</div>
      <div className={`${styles.spanRows} ${styles.gridCell}`}>{order.lastName}</div>
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
      {/* --- Akce a Status v posledním sloupci --- */}
      <div className={styles.actionsCell}>
        <div className={styles.actionsBubble}>
          <button onClick={handleConfirm} className={styles.bubbleButton}>
            <Check size={16} className={styles.confirmIcon} />
          </button>
          <button onClick={handleCancel} className={styles.bubbleButton} >
            <X size={16} className={styles.deleteIcon} />
          </button>
          <button onClick={handleReset} className={styles.bubbleButton}>
            <RotateCw size={16} className={styles.resetIcon} />
          </button>
        </div>

        <SquarePen className={styles.editIcon} size={20} />
      </div>
    </div>
  );
}
