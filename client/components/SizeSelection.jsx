import React, { useState, useEffect } from 'react';
import Size from './Size.jsx';
import Axios from 'axios';
import styles from '../styles/size-selection.css';

function SizeSelection(props) {

  const [stock, setStock] = useState('');
  const soldOut = props.inStock === false;

  useEffect(() => {
    if(props.colorID) {
      Axios.get(`/shoes/${props.shoeID}/colors/${props.colorID}/quantities`)
      .then(quantities => {
        setStock(quantities.data);
      })
      .catch(err => {
        console.error(err);
      });
    }
  }, [props.colorID]);

  const handleClick = (sizeData) => {
    const id = sizeData.id;
    const quantity = stock.filter(x => x.size_id === id)[0];
    props.setInStock(quantity.quantity > 0);
    props.setSize(id)
  }


  return (
    <div>
      <p className={styles.heading}>SELECT SIZE: {soldOut && <span className={styles.soldOutNotice}>This item is sold out</span>} </p>
      {stock && <div className={styles.sizeSelectionContainer}>
        {props.sizes.map((size, i) => {
          return <Size sizeInfo={ size } selected={props.selectedID === size.id} quantity={stock[i].quantity} handleClick={ handleClick }/>
        })}
      </div>}
      {!stock && <div className={styles.sizeSelectionContainer}>
        {props.sizes.map((size) => {
          return <Size sizeInfo={ size } selected={props.selectedID === size.id} quantity={''} handleClick={ handleClick }/>
        })}
      </div>}
    </div>
  );
}

export default SizeSelection;