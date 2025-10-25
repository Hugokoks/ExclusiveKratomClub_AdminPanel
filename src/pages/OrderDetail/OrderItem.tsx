import styles from "./index.module.css";
import type { OrderItemDetail } from "./types";
import { assetApiURL } from "../../config";

export default function OrderItem({ item }: { item: OrderItemDetail }) {
  return (
    <div className={styles.orderItem}>
      <img
        className={styles.orderItemImg}
        src={`${assetApiURL}${item.imageSrc}`}
        alt={item.productName}
      />
      <span className={styles.orderItemName}>
        {item.productName} {item.variantLabel}
      </span>
      <span className={styles.unitPrice}>{item.unitPrice}/ks</span>
      <span className={styles.orderItemPrice}>{item.totalPrice} Kč</span>
      <span className={styles.orderItemQty}>Qty: {item.quantity}</span>
    </div>
  );
}
