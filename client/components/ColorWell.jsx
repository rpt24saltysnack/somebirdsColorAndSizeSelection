import React from 'react';

function ColorWell(props) {

  const shoeColor = props.color.shoe_hex;
  const soleColor = props.color.sole_hex;
  const name = props.color.name;

  const handleClick = () => {
    props.handleClick(props.color);
  }

  return(
    <div className="colorwell-border">
      <div className="colorwell" style={{background: `linear-gradient(to bottom right,  ${shoeColor} 50%,${soleColor} 50%)`}} onClick={ handleClick }>
      </div>
    </div>
  );
}

export default ColorWell;