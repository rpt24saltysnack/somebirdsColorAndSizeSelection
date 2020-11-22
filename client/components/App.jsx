import React, { useState, useEffect } from 'react';
import ColorPalette from './ColorPalette.jsx';
import SizeSelection from './SizeSelection.jsx';
import Axios from 'axios';

function App(props) {

  const [shoeID, setShoeID] = useState(props.shoeID);
  const [classicColors, setClassicColors] = useState(['']);
  const [limitedColors, setLimitedColors] = useState(['']);
  const [sizes, setSizes] = useState(['']);
  const [classicSelection, setClassicSelection] = useState('');
  const [limitedSelection, setLimitedSelection] = useState('');
  const [inStock, setInStock] = useState('');
  const [colorID, setColorID] = useState('');
  const [sizeID, setSizeID] = useState('');

  useEffect(() => {
    Axios.get(`/shoes/${shoeID}/colors`,)
    .then(colors => {
      setClassicColors(colors.data.filter(color => color.limited === false));
      setLimitedColors(colors.data.filter(color => color.limited === true));
    })
    .catch(err => {
      console.error(err);
    });
  }, [shoeID]);

  useEffect(() => {
    Axios.get(`/shoes/${shoeID}/sizes`,)
    .then(sizes => {
      setSizes(sizes.data);
    })
    .catch(err => {
      console.error(err);
    });
  }, [shoeID]);

  return (
      <div className="app-container">
        <ColorPalette colors={ classicColors } selection={ classicSelection } setClassic={ setClassicSelection } setLimited={ setLimitedSelection } setColor={ setColorID } selectedID={ colorID } setSize={ setSizeID }/>
        <ColorPalette colors={ limitedColors } selection={ limitedSelection } setClassic={ setClassicSelection } setLimited={ setLimitedSelection } setColor={ setColorID } selectedID={ colorID } setSize={ setSizeID }/>
        <SizeSelection shoeID={ shoeID } colorID={ colorID } sizes={ sizes } setSize={ setSizeID } selectedID={ sizeID }/>
      </div>
    );
}

export default App;
