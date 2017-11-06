import React from 'react';
import ReactDOM from 'react-dom';
import App from './Github/App.js';
// import App from './App.js';
 
 
import { Provider, connect } from 'react-redux'
import Store from './Github/store/store.js';
// import App from './Github/store/containers.js';
 
ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
)