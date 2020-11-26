import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './Fonts/AvenirNext-DemiBold-03.ttf';
import './Fonts/AvenirNext-Medium-06.ttf';
import './Fonts/Futura-Bold-03.ttf';
import './Fonts/Futura-Medium-01.ttf';
import './Fonts/HelveticaNeue-01.ttf';
import './Fonts/HelveticaNeue-Medium-11.ttf';
import './Fonts/Roboto-Regular.ttf';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
