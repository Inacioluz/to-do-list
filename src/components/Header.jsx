import styles from "./Header.module.css";
import rocket from "../assets/rocket.svg";

export function Header() {
  return (
    <div>
      <header className={styles.header}>
        <strong>
          <img className={styles.imagem} src={rocket} alt="Imagem rocket" />
          <span className={styles.to}>to</span>
          <span className={styles.do}>do</span>
        </strong>
      </header>
    </div>
  );
}
