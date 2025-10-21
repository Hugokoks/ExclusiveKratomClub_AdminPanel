
import styles from "./index.module.css";
import TopPanel from "../../components/TopPanel/TopPanel";
import OrderContainer from "./OrderContainer";


export default function OrderDetail() {
    return (
        <div className={styles.OrderDetailPage}>
            <TopPanel />
            <OrderContainer />


        </div>
    );
}