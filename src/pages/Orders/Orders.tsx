import ViewScreen from "../../components/ViewScreen/ViewScreen";
import styles from "./index.module.css";
import OrderItemList from "./OrderItemList";
import OrdersNav from "./OrdersNav";

export default function Orders() {
  return (
    <ViewScreen>
      <div className={styles.ordersPage}>
        <h2 className={styles.title}>Orders</h2>
        <div className={styles.ordersContentWrapper}>
          <OrdersNav />
          <OrderItemList />


        </div>
      </div>
    </ViewScreen>
  );
}
