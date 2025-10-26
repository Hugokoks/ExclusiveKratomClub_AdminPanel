import styles from "./index.module.css";

export default function ProductItem() {
    return (
        <div className={styles.productItem}>

            <div className={`${styles.spanRows} ${styles.gridCell} ml-4`}>
                20
            </div>
            <div className={`${styles.spanRows} ${styles.gridCell} `}>
                2025-10-25 14:25:51
            </div>
            <div className={`${styles.spanRows} ${styles.gridCell} `}>
                Červený Super Red
            </div>
            <div className={`${styles.spanRows} ${styles.gridCell} `}>
                kratom
            </div>
            <div className={`${styles.spanRows} ${styles.gridCell} `}>
                green-kratom
            </div>
            <div className={`${styles.spanRows} ${styles.gridCell} `}>
                bestseller
            </div>
            <div className={`${styles.spanRows} ${styles.gridCell} `}>
                5000
            </div>
            <div className={`${styles.spanRows} ${styles.gridCell} `}>
                bulk
            </div>

        </div>
    );
}