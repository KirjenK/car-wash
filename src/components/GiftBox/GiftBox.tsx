import styles from './giftBox.module.css';
import giftCard from './giftCard.png';

export default function GiftBox(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainText}>ПОДАРИ РАДОСТЬ УХОДА ЗА ЛЮБИМЫМ АВТОМОБИЛЕМ</div>
     <div className={styles.flexBox}>
      <div className={styles.menuFlex}>
        <div className={styles.flexLeftBox}>
        <div className={styles.arrowBox}>
          <div className={styles.arrow} />
          <div className={styles.arrow2} />
        </div>
        <div className={styles.boxDescription}>
          <p>Плати <i>меньше</i></p>
          <p>— дари <i>больше</i></p>
        </div>
        </div>
      <div className={styles.giftCardBox}>
      <button className={styles.btnGift} type="button">
        <span className={styles.cardName}>GIFTCARD</span>
        <p className={styles.cardPrice}>1000</p>
      </button>
      <button className={styles.btnRub} type="button"> <span className={styles.rubPrice}>950₽</span></button>

      <button className={styles.btnGift} type="button">
        <span className={styles.cardName}>GIFTCARD</span>
        <p className={styles.cardPrice}>3000</p>
      </button>
      <button className={styles.btnRub} type="button"> <span className={styles.rubPrice}>2850₽</span></button>

      <button className={styles.btnGift} type="button">
        <span className={styles.cardName}>GIFTCARD</span>
        <p className={styles.cardPrice}>5000</p>
      </button>
      <button className={styles.btnRub} type="button"> <span className={styles.rubPrice}>4500₽</span></button>

      <button className={styles.btnGift} type="button">
        <span className={styles.cardName}>GIFTCARD</span>
        <p className={styles.cardPrice}>1000</p>
      </button>
      <button className={styles.btnRub} type="button"> <span className={styles.rubPrice}>9000₽</span></button>
      </div>
      </div>
      <div className={styles.border} />
      <img className={styles.imgCard} src={giftCard} alt="giftCard" />
     </div>
     <div className={styles.info}>
     Так же Вы можете приобрести подарочный сертификат на любую желаемую сумму <sup>*</sup>
     </div>
    </div>
  );
}
