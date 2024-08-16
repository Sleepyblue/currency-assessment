import styles from "./Header.module.css";
import Logo from "../../assets/logo.svg";

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.left}>
          <a href="#">Personal</a>
          <a href="#">Business</a>
          <a href="#">Partners</a>
        </div>
        <div className={styles.center}>
          <img src={Logo} alt="Uphold Logo" />
        </div>
        <div className={styles.right}>
          <button>Log In</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
