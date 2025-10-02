import styles from "./index.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

export default function AppNav() {
    return (
        <nav className={`${styles.appNav} flex flex-col items-center p-4 min-h-screen`}>
            <Logo />
            <hr className={styles.hr} />
            <ul>
                <li><NavLink to="/orders" end> Orders</NavLink></li>
                <li><NavLink to="/stock">Stock</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
            </ul>
        </nav>
    );
}
