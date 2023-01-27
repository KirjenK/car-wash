import { motion } from 'framer-motion';
import CardBlock from './CardBlock/CardBlock';
import GiftBlock from './GiftBlock/GiftBlock';
import styles from './loyalitPage.module.css';
import featureAnimationOpacity from '../MainPage/Animation/AnimationOpacity';

export default function LoyalityPage(): JSX.Element {
  return (
    <motion.div
      className={styles.wrapper}
      transition={{
      duration: 1,
    }}
      initial="hidden"
      whileInView="visible"
      variants={featureAnimationOpacity}
      viewport={{ amount: 0, once: true }}
    >
      <div className={styles.borderTop} />
      <CardBlock />
      <GiftBlock />
    </motion.div>
  );
}
