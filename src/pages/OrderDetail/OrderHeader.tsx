import styles from "./index.module.css";
import { Check, X, RotateCw } from "lucide-react";
import type { OrderStatus } from "../Orders/types";
import usePatchOrder from "../../hooks/usePatchOrder";
import useNotifyOnError from "../../hooks/useNotifyOnError";
import useLoadOnPending from "../../hooks/useLoadOnPending";

export default function OrderHeader({
  orderId,
  createdAt,
  status,
}: {
  orderId: string | undefined;
  createdAt: string | undefined;
  status: string | undefined;
}) {
  const iconSize = 18;

  const { pathOrder, isPending, error, isError } = usePatchOrder({
    queryKey: "orderDetail",
  });
  useNotifyOnError({ isError, error });
  useLoadOnPending(isPending);

  function handlePatch(operation: OrderStatus) {
    pathOrder({ id: orderId, status: operation });
  }
  const handleConfirm = () => handlePatch("completed");
  const handleCancel = () => handlePatch("canceled");
  const handleReset = () => handlePatch("pending");

  return (
    <>
      <div className={styles.orderHeader}>
        <div className="flex items-center">
          <h1 className="text-3xl font-medium">
            Objednávka #<span>{orderId}</span>
          </h1>

          <span className="ml-auto mr-5">
            Vytvořeno: <span className="font-bold">{createdAt}</span>
          </span>
        </div>
        <div className="flex mt-2 items-center">
          <span
            className={`
            ${styles.statusHeader}
            ${status === "pending" && styles.pending}
            ${status === "canceled" && styles.canceled}
            ${status === "completed" && styles.completed}`}
          >
            {status}
          </span>

          {/* btns wrapper */}
          <div className="flex gap-5 ml-auto mr-20">
            <button className={styles.statusBtn} onClick={handleConfirm}>
              <Check size={iconSize} />
              Potvrdit objednávku
            </button>
            <button className={styles.statusBtn} onClick={handleCancel}>
              <X size={iconSize} />
              Stornovat objednávku
            </button>
            <button className={styles.statusBtn} onClick={handleReset}>
              <RotateCw size={iconSize} />
              Vratit na pending
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
