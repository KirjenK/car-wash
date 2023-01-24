import styles from './loyalityBox.module.css';
import cardLoyal from './cardLoyal.png';

export default function LoyalityBox(): JSX.Element {
  return (
    <div className={styles.wrapper}>
        <h2>ПРОГРАММА ЛОЯЛЬНОСТИ</h2>
        <div className={styles.flexWrapper}>
            <img src={cardLoyal} alt="cardLoyal" />
            <div className={styles.infoWrapper}>
              <h4>Приветствуем Вас в программе лояльности Бамблби</h4>
              <p className={styles.pInfo}>
              Карта Программы лояльности «BUMBLEBEE BONUS»
              предназначена для постоянных клиентов Компании,
              которые регулярно пользуются услугами автомоечного комплекса
              и хотели бы делать это на более выгодных условиях.
              </p>
              <p className={styles.moreInfo}>
              С подробной информацией по программе лояльности,
              Вы можете ознакомиться нажав на кнопку Узнать больше
              </p>
              <button className={styles.btnMore} type="button"> Узнать больше</button>
            </div>
        </div>
    </div>
  );
}
