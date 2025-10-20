import TopPanel from "../TopPanel/TopPanel";
import AppNav from "../AppNav/AppNav";
import styles from "./index.module.css"; // Vytvoříme si jednoduché styly

type ViewScreenProps = {
    children: React.ReactNode
}

export default function ViewScreen({ children }: ViewScreenProps) {
    return (
        <div className={styles.viewScreen}>
            <AppNav />
            <div className={styles.contentWrapper}>
                <TopPanel />
                <main className={styles.mainContent}>
                    {children}
                </main>
            </div>
        </div>
    );
}
