import styles from "./index.module.css";
import OrderItem from "./OrderItem";



export default function OrderItemList() {


    return <div className={styles.orderItemList}>
        <OrderItem />
        <OrderItem />


    </div>

}