import { motion } from 'framer-motion';
import styles from './mainbox.module.css';
import person from './images/person.png';
import tel from './images/tel1.png';
import siteLogo from './images/siteLogo.svg';
import email from './images/email.png';
import clock from './images/clock.png';
import location from './images/location.png';
import featureAnimation from '../Animation/Animation';

import Slider from './Slider/Slider';

export default function MainBox(): JSX.Element {
  return (
    <main className={styles.wrapper}>
      <div className={styles.slider}>
      <Slider />
      <p className={styles.borderUnderPhoto} />
      </div>
      <div className={styles.info}>
        <div className={styles.adressDiv}>
        <h3>г. Санкт-Петербург, Невский пр-кт 66/68</h3>
        </div>
        <div className={styles.contacts}>
          <h4>Контакты</h4>
          <p className={styles.firstP}> <img src={person} alt="person-logo" /> <span>Управляющий: Кириченко Кирилл</span></p>
          <p> <img src={siteLogo} alt="site-logo" /> <span>Сайт: bumblebee.carwash.ru </span></p>
          <p> <img src={tel} alt="tel-logo" /> <span>Телефон: +7 (812) 523-42-33</span> </p>
          <p> <img src={email} alt="email-logo" /><span> E-mail:<a className={styles.emailWrite} href="mailto:info@bumblebee.ru"> Написать нам</a></span></p>
          <p> <img src={clock} alt="clock-logo" /><span> Время работы: 24 часа</span></p>
          <p> <img src={location} alt="adress-logo" /><span> г. Спб, Невский пр-кт, д. 66</span></p>
        </div>
        <div className={styles.contacts}>
       <h4>Услуги</h4>
       <p><span className={styles.includeChar}>✓</span>
       Автомойка кузова
       </p>
       <p><span className={styles.includeChar}>✓</span>Уборка салона (с 08:00 до 00:00)</p>
       <p><span className={styles.includeChar}>✓</span>Детейлинг (с 09:00 до 21:00)</p>
       <p><span className={styles.includeChar}>✓</span>Кафе</p>
        </div>
        <motion.div
          className={styles.imgWrapper}
          transition={{
          duration: 0.7,
        }}
          initial="hidden"
          whileInView="visible"
          variants={featureAnimation}
          viewport={{ amount: 0, once: true }}
        >
          <img src="https://pngicon.ru/file/uploads/avto_camaro.png" alt="camaro" />
        </motion.div>
      </div>
    </main>
  );
}
