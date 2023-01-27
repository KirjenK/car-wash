import styles from './detailing.module.css';

export default function Detailing():JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.borderTop} />
      <div className={styles.mainBlock}>
         Данный раздел находится в стадии разработки
      </div>
      <div className={styles.spinnerWrapper}>
        <div className={styles.spinner} />
      </div>
    </div>
  );
}
