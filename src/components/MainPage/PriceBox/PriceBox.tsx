import { useState } from 'react';
import { motion } from 'framer-motion';
import Saloon from '../Saloon/Saloon';
import styles from './priceBox.module.css';
import ModalWindow from '../ModalWindow/ModalWindow';

import featureAnimation from '../Animation/Animation';

export default function PriceBox():JSX.Element {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [program, setProgram] = useState({});

  const [price, setPrice] = useState([
    {
      id: 1,
      description: 'ЭКСПРЕСС',
      price: 560,
      discountPrice: 500,
    },
    {
      id: 2,
      description: 'КОМФОРТ',
      price: 610,
      discountPrice: 550,
      saloonPrice: 1200,
      discSalonPrice: 1080,
    },
    {
      id: 3,
      description: 'ЭКСТРА',
      price: 680,
      discountPrice: 610,
      saloonPrice: 1270,
      discSalonPrice: 1140,
    }, {
      id: 4,
      description: 'ИНТЕНСИВ',
      price: 750,
      discountPrice: 675,
      saloonPrice: 1340,
      discSalonPrice: 1205,
    }, {
      id: 5,
      description: 'ПРЕМИУМ',
      price: 850,
      discountPrice: 765,
      saloonPrice: 1440,
      discSalonPrice: 1295,
    }
  ]);

  function openModal(el):void {
    setProgram(el);
    setIsOpen(true);
  }

  return (
    <motion.div
      className={styles.wrapper}
      transition={{
      duration: 0.7,
    }}
      initial="hidden"
      whileInView="visible"
      variants={featureAnimation}
      viewport={{ amount: 0, once: true }}
    >
      <div className={styles.descriprtionBox}>
        <h2>УСЛУГИ И ЦЕНЫ</h2>
        <h3>НАЖМИТЕ НА ПРОГРАММУ МОЙКИ ВЫДЕЛЕННУЮ ЦВЕТОМ</h3>
      </div>
 {/* Here =>>>> */}
      <div className={styles.washPricesBox}>
      <div className={styles.countBox}>
            <div className={styles.titleFlexMain}>
              <div className={styles.title}>Наименование</div>
              <div className={styles.withoutDisc}>Без скидки</div>
              <div className={styles.discount}>10%</div>
            </div>
      </div>
         {price.map((item) => (
          <div key={item.id} className={styles.countBox}>
            <div className={styles.titleFlex}>
              <div className={styles.title}>
                <button onClick={() => openModal(item)} className={`btn${item.id}`} type="button">{item.description}</button>
              </div>
                <div className={styles.border}>{item.price} ₽</div>
              <div className={styles.priceWithDiscount}>{item.discountPrice} ₽</div>
            </div>
          </div>
        )
         )}
         <Saloon price={price} />
      </div>
      <ModalWindow program={program} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </motion.div>

  );
}
