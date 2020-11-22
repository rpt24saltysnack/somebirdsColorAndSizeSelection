import React, { useState, useEffect } from 'react';
import Size from './Size.jsx';
import Axios from 'axios';

function SizeSelection(props) {

  return (
    <div className="sizeselection-container">
      <p className="heading">SELECT SIZE: </p>
      <div className="sizeselection">
        {props.sizes.map(size => {
          return <Size sizeInfo={ size } />
        })}
      </div>
    </div>
  );
}

export default SizeSelection;