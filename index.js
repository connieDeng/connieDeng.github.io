import React from 'react';
import ReactDOM from 'react-dom';
import App from '.src/App';
import reportWebVitals from './reportWebVitals';
import '.src/assets/fonts/Dunkin.ttf';
import '.src/assets/fonts/Traffolight.otf';
import '.src/assets/fonts/NeutraText-Book.otf';
import '.src/assets/scss/base.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
