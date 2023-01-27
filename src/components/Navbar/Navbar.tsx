import { Link } from 'react-router-dom';
import logo from './logo.png';
import styles from './navbar.module.css';

export default function Navbar(): JSX.Element {
  return (
    <header className={styles.wrapper}>
        <div className={styles.logoDiv}>
          <img className={`${styles.logo} ${styles.navMenu}`} src={logo} alt="img" />
        </div>
        <div className={styles.navMenuDiv}>
          <Link className={styles.navMenu} to="/"> Главная </Link>
          <Link className={styles.navMenu} to="/detailing"> Детейлинг </Link>
          <Link className={styles.navMenu} to="/loyality"> Программа лояльности </Link>
            <a className={styles.navMenu} href="tel:+78125234233">Позвонить нам</a>
          <Link className={`${styles.navMenu} ${styles.navMenuLast}`} to="/about"> О компании </Link>
        </div>
    </header>
  );
}
