import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Size(props) {
  const size = props.sizeInfo.size;

  return (
    <div className="size">
      <p className="size-text">{ size }</p>
      <p>{props.quantity}</p>
    </div>
  );
}

export default Size;