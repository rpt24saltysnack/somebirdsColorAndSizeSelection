import React from 'react';
import styles from '../styles/purchase-button.css';

function PurchaseButton(props) {

  const soldOut = props.inStock === false;
  const colorID = props.colorID;
  const sizeID = props.sizeID;

  const value = () => {
    if (props.inStock === false)
      return 'SIZE SOLD OUT';
    if (props.colorID && sizeID === '') {
      return 'SELECT A SIZE';
    } else {
      return 'ADD TO CART';
    }
  }

  const buttonText = value();
  const addToCart = buttonText === 'ADD TO CART';
  const selectASize = buttonText === 'SELECT A SIZE';
  const sizeSoldOut = buttonText === 'SIZE SOLD OUT';

  return (
    <div className={styles.buttonContainer}>
      {addToCart && <div className={styles.buttonEnabled}><p className={styles.textEnabled}>{buttonText}</p></div>}
      {selectASize && <div className={styles.button}><p className={styles.text}>{buttonText}</p></div>}
      {sizeSoldOut && <div className={styles.button}><p className={styles.text}>{buttonText}</p></div>}
      <p className={styles.returnInfo}>Free shipping & 30-day returns</p>
    </div>
  );
}

export default PurchaseButton;