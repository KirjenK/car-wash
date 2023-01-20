import styles from './mainbox.module.css';
import person from './images/person.png';
import tel from './images/tel1.png';
import siteLogo from './images/siteLogo.svg';
import email from './images/email.png';
import clock from './images/clock.png';
import location from './images/location.png';

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
          <p> <img src={person} alt="person-logo" /> <span>Управляющий: Кириченко Кирилл</span></p>
          <p> <img src={siteLogo} alt="site-logo" /> <span>Сайт: bumblebee.carwash.ru </span></p>
          <p> <img src={tel} alt="tel-logo" /> <span>Телефон: +7 (812) 523-42-33</span> </p>
          <p> <img src={email} alt="email-logo" /><span> E-mail: info@bumblebee.ru</span></p>
          <p> <img src={clock} alt="clock-logo" /><span> Время работы: 24 часа</span></p>
          <p> <img src={location} alt="adress-logo" /><span> г. Санкт-Петербург, Невский пр-кт 66/68</span></p>
        </div>
      </div>
    </main>
  );
}
