import styles from "./index.module.css";
import OrderHeader from "./OrderHeader";

export default function OrderContainer() {
    return (
        <div className={styles.orderContainer}>
            <OrderHeader />
            <div className={styles.columnLeft}>

            </div>
            <div className={styles.columnRight}>

            </div>

        </div>
    );
}