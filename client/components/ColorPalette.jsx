import React, { useState, useEffect } from 'react';
import ColorWell from './ColorWell.jsx';

function ColorPalette(props) {

  const [isLimited, setLimited] = useState(false);
  const [safeToRender, setSafeToRender] = useState(false);

  useEffect(() => {
    if (Array.isArray(props.colors)) {
      setSafeToRender(true);
      setLimited(props.colors[0].limited);
    }
  }, [props.colors]);

  const handleClick = (colorWell) => {
    let [name, shoeColor, soleColor] = [colorWell.name, colorWell.shoe_color, colorWell.sole_color];
    if(isLimited) {
      props.setLimited(`${name} (${shoeColor}/${soleColor})`);
      props.setClassic('');
    } else {
      props.setClassic(`${name} (${shoeColor}/${soleColor})`);
      props.setLimited('');
    }
  }

  if (safeToRender) {
    return(
      <div className="colorpalette-container">
        {!isLimited && <p className="heading">CLASSICS: {props.selection}</p>}
        {isLimited && <p className="heading">LIMITED EDITION: {props.selection}</p>}
        <div className="colorpalette">
          {props.colors.map(color => {
            return <ColorWell color={ color } handleClick={ handleClick }/>
          })}
        </div>
    </div>
    )
  } else {
    return (
      <div className="empty-colorpalette"></div>
    )
  }
}

export default ColorPalette;