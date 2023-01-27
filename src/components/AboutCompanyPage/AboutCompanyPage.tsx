import styles from './about.module.css';
import img from './carMB.png';

export default function AboutCompanyPage():JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper} />
      <div className={styles.centerWrapper}>
        <div className={styles.aboutCompany}>
          <div className={styles.leftWrapper}>
          <h1>О КОМПАНИИ</h1>
          <p>НАША ФИЛОСОФИЯ</p>
          <div />
          <span>г. Санкт-Петербург</span>
          <span> Невский пр-кт д. 66</span>
          </div>
            <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
