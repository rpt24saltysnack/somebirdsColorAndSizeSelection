import React from 'react';
import styles from '../styles/colorwell.css';

function ColorWell(props) {

  const name = props.color.name;
  const shoeColor = props.color.shoe_hex;
  const soleColor = props.color.sole_hex;
  const isLimited = props.isLimited;
  const isSelected = props.selected;

  const handleClick = () => {
    let [id, name, shoeColor, soleColor] = [props.color.id, props.color.name, props.color.shoe_color, props.color.sole_color];
    if(isLimited) {
      props.setLimited(`${name} (${shoeColor}/${soleColor})`);
      props.setClassic('');
    } else {
      props.setClassic(`${name} (${shoeColor}/${soleColor})`);
      props.setLimited('');
    }
    props.setColor(id);
    props.setSize('');
    props.setInStock('');
  }

  return(
    <div>
      {!isSelected && <div className={styles.colorWell} style={{background: `linear-gradient(to bottom right,  ${shoeColor} 50%,${soleColor} 50%)`}} onClick={ handleClick }></div>}
      {isSelected && <div className={styles.selectedColorWell} style={{background: `linear-gradient(to bottom right,  ${shoeColor} 50%,${soleColor} 50%)`}} onClick={ handleClick }></div>}
    </div>
  );
}

export default ColorWell;