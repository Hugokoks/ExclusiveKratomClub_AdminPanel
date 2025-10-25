import styles from "./index.module.css";
import OrderHeader from "./OrderHeader";
import OrderItem from "./OrderItem";
import TemplateBox from "./TemplateBox";
import type { OrderDetail } from "./types";

export default function OrderContainer({
  order,
}: {
  order: OrderDetail | undefined;
}) {
  return (
    <div className={styles.orderContainer}>
      <OrderHeader
        orderId={order?.ekcId}
        createdAt={order?.createdAt}
        status={order?.status}
      />

      {/*Order Items */}
      <div className={styles.columnLeft}>
        <TemplateBox title="Položky v objednávce">
          {order?.items?.map((item, i) => (
            <OrderItem key={`${item.productName}-${i}`} item={item} />
          ))}
        </TemplateBox>

        {/*Customer payment summary */}
        <TemplateBox title="Souhrn platby">
          <span>
            Doprava:{" "}
            <span>
              {order?.shippingCzk === 0 ? "zdarma" : `${order?.shippingCzk} Kč`}
            </span>
          </span>
          {order?.paymentMethod === "dobirka" && (
            <span>
              Dobirka: <span>{order?.paymentFeeCzk} Kč</span>
            </span>
          )}
          {order?.discountCzk ||
            (0 > 0 && (
              <span>
                Sleva: <span>-{order?.discountCzk} Kč</span>
              </span>
            ))}

          <span>
            Cena produktů <span>{order?.subtotalCzk} Kč</span>
          </span>
          {}
          <hr />
          <span>
            Celkem s DPH: <span>{order?.totalCzk} Kč</span>
          </span>
        </TemplateBox>
      </div>
      <div className={styles.columnRight}>
        {/*Customer personal contact */}
        <TemplateBox title="Kontaktní údaje zákazníka">
          <span>
            Jméno:{" "}
            <span>
              {order?.customerFirstName} {order?.customerLastName}
            </span>
          </span>
          <span>
            Email: <span>{order?.customerEmail}</span>
          </span>
          <span>
            Telefon: <span>{order?.customerPhone}</span>
          </span>
        </TemplateBox>
        {/*Customer delivery address */}
        <TemplateBox title="Doručovací údaje">
          <span>{order?.deliveryAddress}</span>
        </TemplateBox>

        {/*Customer payment and delivery method */}
        <TemplateBox title="Způsob platby a doručení">
          <span>
            Platba: <span>{order?.paymentMethod}</span>
          </span>
          <span>
            Doručení: <span>{order?.deliveryMethod}</span>
          </span>
        </TemplateBox>

        <TemplateBox title="Další informace k objednávce">
          <span>{order?.note ? order.note : "Žádná poznámka."}</span>
          <span>
            Váha: <span>{order?.weightGrams}g</span>
          </span>
        </TemplateBox>
      </div>
    </div>
  );
}
