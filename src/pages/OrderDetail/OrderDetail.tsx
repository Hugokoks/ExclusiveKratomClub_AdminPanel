import styles from "./index.module.css";
import TopPanel from "../../components/TopPanel/TopPanel";
import OrderContainer from "./OrderContainer";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchOrder } from "./api";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import NotFound from "../../components/NotFound/NotFound";

export default function OrderDetail() {
  const { id } = useParams();

  const {
    data: order,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["orderDetail"],
    queryFn: () => fetchOrder(id as string),
    retry: 2,
    select: (data) => data.order,
  });

  if (isLoading) return <LoadingPage />;
  if (isError) return <NotFound />;

  return (
    <div className={styles.OrderDetailPage}>
      <TopPanel />
      <OrderContainer order={order} />
    </div>
  );
}
