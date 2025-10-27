import { Link } from "react-router-dom";
import styles from "./index.module.css";
import type { Product } from "./types";

interface ProductItemProps {
  product: Product;
}

/*Pridat dynamicky data z product */

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <Link to="/products/1" className={styles.productItem}>
      <div className={`${styles.spanRows} ${styles.gridCell} ml-10`}>20</div>
      <div className={`${styles.spanRows} ${styles.gridCell} `}>
        2025-10-25 14:25:51
      </div>
      <div className={`${styles.spanRows} ${styles.gridCell} `}>
        Červený Super Red
      </div>
      <div className={`${styles.spanRows} ${styles.gridCell} `}>kratom</div>
      <div className={`${styles.spanRows} ${styles.gridCell} `}>
        green-kratom
      </div>
      <div className={`${styles.spanRows} ${styles.gridCell} `}>bestseller</div>
      <div className={`${styles.spanRows} ${styles.gridCell} `}>5000</div>
      <div className={`${styles.spanRows} ${styles.gridCell} `}>400</div>
      <div className={`${styles.spanRows} ${styles.gridCell} `}>bulk</div>
    </Link>
  );
}
