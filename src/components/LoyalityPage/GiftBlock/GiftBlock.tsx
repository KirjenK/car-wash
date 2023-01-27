import styles from './giftBlock.module.css';
import giftImg from '../../MainPage/GiftBox/giftCard.png';

export default function GiftBlock():JSX.Element {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.h2}>ПОДАРИ РАДОСТЬ УХОДА ЗА ЛЮБИМЫМ АВТОМОБИЛЕМ</h2>
      <div className={styles.giftFlex}>
        <div className={styles.leftGiftFlex}>
          <div className={styles.boxFlex}>
            <div className={styles.box}>
              <div className={styles.arrow1} />
              <div className={styles.arrow2} />
            </div>
              <div className={styles.boxflexText}>
                <p>Плати <i>меньше</i></p>
                <p>— дари <i>больше</i></p>
              </div>
          </div>
         <div className={styles.blockWrapper}>
          <div className={styles.priceWrapper}>
            <div className={styles.priceBlock}>
              <div className={styles.leftPriceBlock}>
              <div className={styles.leftPriceBlock}>GIFTCARD</div>
                <p>1000</p>
              </div>
              <div className={styles.rightPriceBlock}>950₽</div>
            </div>
            <div className={styles.priceBlock}>
              <div className={styles.leftPriceBlock}>
              <div className={styles.leftPriceBlock}>GIFTCARD</div>
                <p>3000</p>
              </div>
              <div className={styles.rightPriceBlock}>2850₽</div>
            </div>
            <div className={styles.priceBlock}>
              <div className={styles.leftPriceBlock}>
              <div className={styles.leftPriceBlock}>GIFTCARD</div>
                <p>5000</p>
              </div>
              <div className={styles.rightPriceBlock}>4500₽</div>
            </div>
            <div className={styles.priceBlock}>
              <div className={styles.leftPriceBlock}>
              <div className={styles.leftPriceBlock}>GIFTCARD</div>
                <p>10000</p>
              </div>
              <div className={styles.rightPriceBlock}>9000₽</div>
            </div>

          </div>
          <div className={styles.borderDiv} />
          <img src={giftImg} alt="gift" />
         </div>
        </div>
      </div>
        <div className={styles.footerBlock}>
          <h3>Обращаем Ваше внимание, что скидка
             по карте лояльности и оплата услуг
             сертификатом распространяется на услуги
              тоннельной мойки, конвейерной уборки
               салона, детейлинга, кроме:
          </h3>
          <p>- Товары и продукция кафе</p>
          <p>- Защита дисков Autosol Ceramic Coating</p>
          <p>- Ceramic coating Autosol</p>
          <p>- Комплексная предпродажная подготовка автомобилей</p>
          <p>- Оклейка / снятие полиуретановой пленки (все виды)</p>
          <p>- Бронирование фар</p>
          <p>- Реставрация кожи Colourlock</p>
          <p>- Защита кожи Colourlock</p>
          <p>- Покраска кожаных элементов (все виды)</p>
          <p>- Устранение повреждений кожи</p>
          <p>- Пакеты (Aqua light, Aqua Standart, Aqua Optimal, Aqua Pro)</p>
          <p>- Мойка днища и подвески</p>
          <p>- Мойка двигателя снизу</p>
          <p>- Подкраска сколов</p>
          <p>- Удаление вмятин</p>
          <p>- Тонировка</p>
          <p>- Озонирование салона</p>
        </div>
    </div>
  );
}
