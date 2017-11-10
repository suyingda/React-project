import React from 'react';
import ReactDOM from 'react-dom';
// import App from './Github/App.js';
// import App from './App.js';
 
import * as Actions  from './Github/store/action.js';

import  "./Github/Global.js";

import { Provider, connect } from 'react-redux';
 
import store from './Github/store/store.js';
import App from './Github/store/containers.js'; 
 let unsubscribe =  store.subscribe(() => {console.log(Actions,store)}) 
 

 

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
)