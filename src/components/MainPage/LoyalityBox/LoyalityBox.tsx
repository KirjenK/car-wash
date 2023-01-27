import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './loyalityBox.module.css';
import cardLoyal from './cardLoyal.png';
import featureAnimationOpacity from '../Animation/AnimationOpacity';

export default function LoyalityBox(): JSX.Element {
  return (
    <motion.div
      className={styles.wrapper}
      transition={{
      duration: 1.5,
    }}
      initial="hidden"
      whileInView="visible"
      variants={featureAnimationOpacity}
      viewport={{ amount: 0, once: true }}
    >
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
           <Link to="/loyality"><button className={styles.btnMore} type="button"> Узнать больше</button></Link>
            </div>
        </div>
    </motion.div>
  );
}
