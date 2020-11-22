import React, { useState, useEffect } from 'react';
import Size from './Size.jsx';
import Axios from 'axios';

function SizeSelection(props) {

const [stock, setStock] = useState('');

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
    props.setSize(id)
  }

  if (stock) {
    return (
      <div className="sizeselection-container">
        <p className="heading">SELECT SIZE: </p>
        <div className="sizeselection">
          {props.sizes.map((size, i) => {
            return <Size sizeInfo={ size } selected={props.selectedID === size.id} quantity={stock[i].quantity} handleClick={ handleClick }/>
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="sizeselection-container">
        <p className="heading">SELECT SIZE: </p>
        <div className="sizeselection">
          {props.sizes.map((size) => {
            return <Size sizeInfo={ size } selected={props.selectedID === size.id} quantity={''} handleClick={ handleClick }/>
          })}
        </div>
      </div>
    );
  }
}

export default SizeSelection;