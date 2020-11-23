import React from 'react';

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
    <div className="button-container">
      {addToCart && <div className="button enabled"><p className="button-text enabled">{buttonText}</p></div>}
      {selectASize && <div className="button"><p className="button-text">{buttonText}</p></div>}
      {sizeSoldOut && <div className="button"><p className="button-text">{buttonText}</p></div>}
      <p className="return-info">Free returns through January 15</p>
    </div>
  );
}

export default PurchaseButton;