import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import App from './components/app/index';
import './index.css';
// import Provider from "react-redux/src/components/Provider";

const store = createStore( ()=> {}, {} );

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
