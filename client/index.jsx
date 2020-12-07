import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
var params = new URLSearchParams(window.location.search);

ReactDOM.render(<App shoeID={params.get('prod')} />, document.getElementById('ColorAndSizeSelection'));
