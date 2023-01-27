import styles from './saloon.module.css';

export default function Saloon({ price }):JSX.Element {
const newPrice = price.filter((el) => el.saloonPrice);
  return (
    <>
    <div className={styles.saloon}>
    <h4><span />Уборка салона комплексная <span /></h4>
    {newPrice.map((item) => (
    <div key={item.id} className={styles.countBox}>
      <div className={styles.titleFlex}>
        <div className={styles.title}><span>Комплекс</span><span className={`span${item.id}`}>{item.description}</span></div>
        <div className={styles.border}>{item.saloonPrice} ₽</div>
        <div className={styles.priceWithDiscount}>{item.discSalonPrice} ₽</div>
      </div>
    </div>
  )
    )}
    </div>
    <div className={styles.info}>
      Цены справа указаны с учетом скидки по программе лояльности Бамлби <sup>*</sup>
    </div>
    </>
  );
}
