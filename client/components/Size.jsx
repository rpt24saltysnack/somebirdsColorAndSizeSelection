import React, { useState, useEffect } from 'react';
import styles from '../styles/size.css';

function Size(props) {

  const size = props.sizeInfo.size;
  const isSelected = props.selected;
  const noStock = props.quantity === 0;

  const handleClick = () => {
    props.handleClick(props.sizeInfo);
  }

  return (
    <div>
      {isSelected && noStock && <div className={styles.selectedNoStock} onClick={ handleClick }><p className={styles.text}>{ size }</p></div>}
      {isSelected && !noStock && <div className={styles.selectedHasStock} onClick={ handleClick }><p className={styles.text}>{ size }</p></div>}
      {!isSelected && noStock && <div className={styles.noStock} onClick={ handleClick }><p className={styles.text}>{ size }</p></div>}
      {!isSelected && !noStock && <div className={styles.hasStock} onClick={ handleClick }><p className={styles.text}>{ size }</p></div>}
    </div>
  );
}

export default Size;