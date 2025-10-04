import styles from "./index.module.css";
import { NavLink } from "react-router-dom";
import { Package, Boxes, Leaf } from "lucide-react";
import Logo from "../Logo/Logo";

export default function AppNav() {
  return (
    <nav
      className={`${styles.appNav} flex flex-col items-center  min-h-screen`}
    >
      <Logo />
      <hr className={styles.hr} />
      <ul>
        <li>
          <NavLink to="/orders" className={styles.link}>
            <Package className={styles.icon} size={24} strokeWidth={2.2} />
            <span>Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stock" className={styles.link}>
            <Boxes className={styles.icon} size={24} strokeWidth={2.2} />
            <span>Stock</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={styles.link}>
            <Leaf className={styles.icon} size={24} strokeWidth={2.2} />
            <span>Products</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
