import React, { useState, useEffect } from 'react';
import ColorWell from './ColorWell.jsx';
import styles from '../styles/color-palette.css';

function ColorPalette(props) {

  const [isLimited, setLimited] = useState(false);

  useEffect(() => {
    if (Array.isArray(props.colors)) {
      setLimited(props.colors[0].limited);
    }
    if (props.colors[0].limited === false) {
      let color = props.colors[0];
      props.setClassic(`${color.name} (${color.shoe_color}/${color.sole_color})`);
      props.setColor(props.colors[0].id);
    }
  }, [props.colors]);

  return(
    <div>
      {!isLimited && <p className={styles.heading}>CLASSICS: <span className={styles.text}>{props.selection}</span></p>}
      {isLimited && <p className={styles.heading}>LIMITED EDITION: <span className={styles.text}>{props.selection}</span></p>}
      <div className={styles.colorPalette}>
        {props.colors.map(color => {
          return <ColorWell color={ color } selected={props.selectedID === color.id} setClassic={ props.setClassic } setLimited={ props.setLimited } setColor={ props.setColor } setSize={ props.setSize } setInStock={props.setInStock} isLimited={ isLimited }/>
        })}
      </div>
    </div>
  );
}

export default ColorPalette;