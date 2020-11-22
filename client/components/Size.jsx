import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Size(props) {
  const size = props.sizeInfo.size;
  const isSelected = props.selected;
  const noStock = props.quantity === 0;

  const handleClick = () => {
    props.handleClick(props.sizeInfo);
  }

  if (isSelected) {
    if(noStock) {
      return (
        <div className="size selectedsize crossedselected" onClick={ handleClick }>
          <p className="size-text">{ size }</p>
          <p>yo</p>
        </div>
      );
    } else {
      return (
        <div className="size selectedsize" onClick={ handleClick }>
          <p className="size-text">{ size }</p>
          <p>yo</p>
        </div>
      );
    }
  } else {
    if(noStock) {
      return (
        <div className="size crossed" onClick={ handleClick }>
          <p className="size-text">{ size }</p>
        </div>
      );
    } else {
      return (
        <div className="size" onClick={ handleClick }>
          <p className="size-text">{ size }</p>
        </div>
      );
    }
  }
}

export default Size;