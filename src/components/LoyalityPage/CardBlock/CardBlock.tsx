import styles from './cardBlock.module.css';
import card from '../../MainPage/LoyalityBox/cardLoyal.png';

export default function CardBlock():JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topSection}>
      <h2>Программа лояльности</h2>
        <p>
        Карта Программы лояльности «BUMBLEBEE BONUS» предназначена
         для постоянных клиентов Компании, которые регулярно пользуются
          услугами автомоечного комплекса и хотели бы делать это на более выгодных условиях.
        </p>
      </div>
      <div className={styles.cardSection}>
        <div className={styles.topCardSectionFlex}>
          <h3>Скидочная карта клиента БАМБЛБИ БОНУС</h3>
          <div>10%</div>
        </div>
        <div className={styles.midSection}>
          <img src={card} alt="card" />
          <div>
          • Скидка 10 % на услуги и сопутствующие товары.
          + В день рождения или шесть дней после - тоннельная мойка
          кузова по любой программе на выбор в подарок.
          </div>
        </div>
        <p className={styles.cardPrice}>
          Стоимость карты: <span>1000 ₽</span>
        </p>
      </div>
    </div>
  );
}
