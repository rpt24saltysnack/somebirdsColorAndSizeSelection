import React, { useState, useEffect } from 'react';
import ColorPalette from './ColorPalette.jsx';
import SizeSelection from './SizeSelection.jsx';
import Axios from 'axios';

function App(props) {

  const [shoeID, setShoeID] = useState(props.shoeID);
  const [classicColors, setClassicColors] = useState(['']);
  const [limitedColors, setLimitedColors] = useState(['']);
  const [sizes, setSizes] = useState(['']);

  useEffect(() => {
    Axios.get('/shoes/:shoeId/colors',{
      params: {
        shoeId: shoeID
      }
    })
    .then(colors => {
      setClassicColors(colors.data.filter(color => color.limited === false));
      setLimitedColors(colors.data.filter(color => color.limited === true));
    })
    .catch(err => {
      console.error(err);
    });
  }, [shoeID]);

  useEffect(() => {
    Axios.get('/shoes/:shoeId/sizes',{
      params: {
        shoeId: shoeID
      }
    })
    .then(sizes => {
      setSizes(sizes.data);
    })
    .catch(err => {
      console.error(err);
    });
  }, [shoeID]);

  return (
      <div className="app-container">
        <h2>App</h2>
        <ColorPalette colors={ classicColors }/>
        <ColorPalette colors={ limitedColors }/>
        <SizeSelection />
      </div>
    );
}

export default App;
