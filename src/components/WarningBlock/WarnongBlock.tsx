import styles from './warningBlock.module.css';
import mainImg from './mainImg.png';
import neutral from './neutral.png';
import infoImg1 from './infoImg1.png';
import infoImg2 from './infoImg2.png';
import infoImg3 from './infoImg3.png';
import infoImg4 from './infoImg4.png';

export default function WarnongBlock(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <h2>ВНИМАНИЕ!</h2>
      <h3>Необходимо соблюдать следующие правила!</h3>
      <div className={styles.mainImgBlock}>
        <img className={styles.mainImg} src={mainImg} alt="warning-img" />
        <img className={styles.neutralImg} src={neutral} alt="neutral" />
      </div>
      <div className={styles.smallImgBlock}>
        <img src={infoImg1} alt="brake" />
        <img src={infoImg2} alt="rule" />
        <img src={infoImg3} alt="brake1" />
        <img src={infoImg4} alt="engine" />
      </div>
      <div className={styles.infoBlock}>
        <h4>НЕ <span>ОСТАНАВЛИВАЙТЕСЬ</span> НА ВЫЕЗДЕ</h4>
        <h4>НЕ <span>ОСТАНАВЛИВАЙТЕСЬ</span> НА ВЬЕЗДЕ</h4>
        <h4>В ЭКСТРЕННЫХ СИТУАЦИЯХ <span>ПРОДОЛЖИТЕЛЬНО НАЖИМАЙТЕ</span> НА ЗВУКОВОЙ СИГНАЛ</h4>

          <p>Уважаемые Клиенты, к сожалению, мы не можем обслуживать автомобили с
            механическими повреждениями, так как наличие повреждения может повлечь
             ещё большее повреждение Вашего автомобиля, последующих автомобилей
              движущихся сзади и непосредственно самих щёток, за счёт возможного
              отрыва частей элементов деталей автомобиля. В данном случае мы можем
               предложить Вам альтернативу в виде услуг ручной мойки в зоне детейлинга.
          </p>
          <p>При выполнении услуг автоматической мойки кузова мы не несём ответственность
            за сохранение ЛКП, если покраска была произведена не в заводских условиях.
          </p>
          <p>Обращаем Ваше внимание на то, что уборка салона автомобиля на конвейере
            или в детейлинге возможна только после тоннельной или детейлинговой моек кузова
             в автомоечном комплексе Акваматик.
          </p>
          <p>В тоннеле нельзя помыться с открытым багажником для пикапа (без крышки).</p>
          <p>Дополнительную информацию можно получить по телефону +7 (812) 523-42-33</p>
      </div>
    </div>
  );
}
