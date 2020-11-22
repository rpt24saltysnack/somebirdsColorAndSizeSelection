import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Size(props) {
  const size = props.sizeInfo.size;
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {

  }, []);

  return (
    <div className="size">
      <p className="size-text">{ size }</p>
    </div>
  );
}

export default Size;