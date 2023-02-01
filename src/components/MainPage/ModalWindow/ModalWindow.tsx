import { Dispatch, SetStateAction } from 'react';
import Modal from 'react-modal';
import Price from '../PriceBox/types/price';
import styles from './modalWindow.module.css';
import state from './state';

Modal.setAppElement('#root');

interface ModalWindowProps {
  modalIsOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
  program: Price,
}

export default function ModalWindow({ modalIsOpen, setIsOpen, program }
  : ModalWindowProps): JSX.Element {
  const currentClickedProgramm = state.find((el) => el.description === program.description);
  let subtitle:any;

  const customStyles = {
    content: {
      width: '75vw',
      height: 'auto',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function afterOpenModal(): void {
    subtitle.style.color = '#f00';
  }

  function closeModal(): void {
    setIsOpen(false);
  }

  return (
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={styles.test}
      >

          <h2 className={`${styles.h2} btn${currentClickedProgramm?.id}`} ref={(_subtitle) => (subtitle = _subtitle)}>
          <span>{currentClickedProgramm?.description}</span>
          </h2>

         <button className={styles.closeBtn} onClick={closeModal}>X</button>
         <div className={styles.wrapper}>
           <div className={styles.leftFlex}>
            <p> <span className={styles.includeChar}>✓</span> {currentClickedProgramm?.option1}</p>
            <p> <span className={styles.includeChar}>✓</span> {currentClickedProgramm?.option2}</p>
            <p> <span className={styles.includeChar}>✓</span> {currentClickedProgramm?.option3}</p>
            <p> <span className={styles.includeChar}>✓</span> {currentClickedProgramm?.option4}</p>
            <p> <span className={styles.includeChar}>✓</span> {currentClickedProgramm?.option5}</p>
            <p> <span className={styles.includeChar}>✓</span> {currentClickedProgramm?.option6}</p>
            <p> <span className={styles.includeChar}>✓</span> {currentClickedProgramm?.option7}</p>
            <p> <span className={styles.includeChar}>✓</span> {currentClickedProgramm?.option8}</p>
            <p> <span className={styles.includeChar}>✓</span> {currentClickedProgramm?.option9}</p>
            <p> <span className={styles.includeChar}>✓</span> {currentClickedProgramm?.option10}</p>
            <p> <span className={styles.includeChar}>✓</span> {currentClickedProgramm?.option11}</p>
            <p> <span className={styles.includeChar}>✓</span> {currentClickedProgramm?.option12}</p>
            <p> <span className={styles.includeChar}>✓</span> {currentClickedProgramm?.option13}</p>
           </div>
         <div className={styles.rightFlex}>
         {currentClickedProgramm?.include1 ? (
         <p><span className={styles.includeChar}>✓</span> {currentClickedProgramm?.include1}</p>
         ) : (
           null
         )}
         {currentClickedProgramm?.include2 ? (
         <p><span className={styles.includeChar}>✓</span> {currentClickedProgramm?.include2}</p>
         ) : (
           null
         )}
          {currentClickedProgramm?.include3 ? (
         <p> <span className={styles.includeChar}>✓</span> {currentClickedProgramm?.include3}</p>
         ) : (
           null
         )}
          {currentClickedProgramm?.include4 ? (
         <p><span className={styles.includeChar}>✓</span> {currentClickedProgramm?.include4}</p>
         ) : (
           null
         )}
          {currentClickedProgramm?.include5 ? (
         <p><span className={styles.includeChar}>✓</span> {currentClickedProgramm?.include5}</p>
         ) : (
           null
         )}
           {currentClickedProgramm?.notInclude1 ? (
             <>
             <h3>Не входит в тариф</h3>
           <p className={styles.firstPRightFlex}>{currentClickedProgramm?.notInclude1}</p>
           <p>{currentClickedProgramm?.notInclude2}</p>

           {currentClickedProgramm?.notInclude3 ? (
           <p>{currentClickedProgramm?.notInclude3}</p>
           ) : (
           null
           )}
           {currentClickedProgramm?.notInclude4 ? (
           <p>{currentClickedProgramm?.notInclude4}</p>
           ) : (
           null
           )}
           {currentClickedProgramm?.notInclude5 ? (
           <p>{currentClickedProgramm?.notInclude5}</p>
           ) : (
           null
           )}
             </>
           ) : (
           null
           )}
         </div>
         </div>
         <div className={styles.bottomFlex}>
           <p>{currentClickedProgramm?.price} ₽</p>
           <p>{currentClickedProgramm?.discPrice} ₽ <sup>*</sup></p>
         </div>
         <p className={styles.modalFooter}>
           Цена справа указана с учетом скидки по программе лояльности bumblebee <sup>*</sup>
         </p>
      </Modal>
  );
}
