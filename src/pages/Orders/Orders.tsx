import ViewScreen from "../../components/ViewScreen/ViewScreen";
import styles from "./index.module.css";

export default function Orders() {
  return (
    <ViewScreen>
      <div className={styles.ordersPage}>
        <h2 className={styles.title}>Orders Page</h2>
        <div className={styles.ordersContentWrapper}></div>
      </div>
    </ViewScreen>
  );
}
