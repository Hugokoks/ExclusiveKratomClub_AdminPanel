import { Link } from "react-router-dom";
import styles from "./index.module.css";

export default function NotFound() {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.contentWrapper}>
        <div className={styles.glitch} data-text="404">
          404
        </div>
        <h1 className={styles.title}>CHYBA: Objekt Nenalezen</h1>
        <p className={styles.message}>
          Zdá se, že jste zabloudili ve vesmíru naší administrace.
          <br />
          Zadaná adresa neexistuje, nebo byla rekalibrována do jiné dimenze.
        </p>
        <p className={styles.tip}>
          Doporučujeme zkontrolovat souřadnice nebo se vrátit na bezpečnou
          základnu.
        </p>
        <Link to="/" className={styles.homeButton}>
          <span className={styles.buttonText}>Návrat na základnu</span>
          <span className={styles.arrow}>→</span>
        </Link>
      </div>
    </div>
  );
}
