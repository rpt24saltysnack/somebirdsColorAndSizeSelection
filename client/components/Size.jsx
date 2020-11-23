import React, { useState, useEffect } from 'react';

function Size(props) {

  const size = props.sizeInfo.size;
  const isSelected = props.selected;
  const noStock = props.quantity === 0;

  const handleClick = () => {
    props.handleClick(props.sizeInfo);
  }

  return (
    <div>
      {isSelected && noStock && <div className="size selectedsize crossedselected" onClick={ handleClick }><p className="size-text">{ size }</p></div>}
      {isSelected && !noStock && <div className="size selectedsize" onClick={ handleClick }><p className="size-text">{ size }</p></div>}
      {!isSelected && noStock && <div className="size crossed" onClick={ handleClick }><p className="size-text">{ size }</p></div>}
      {!isSelected && !noStock && <div className="size" onClick={ handleClick }><p className="size-text">{ size }</p></div>}
    </div>
  );
}

export default Size;