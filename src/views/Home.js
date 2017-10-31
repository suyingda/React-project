import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
  
 
  import BasicExample from './App.js'
class App extends Component {
    
 render() {
   return (
    <div>
      
        <BasicExample match="/bubblegum"/>
        ----
        <Router>
      <div >
        <div >
          <ul >
            <li><Link to="/">苏</Link></li>
            <li><Link to="/bubblegum">英</Link></li>
            <li><Link to="/shoelaces">大</Link></li>
          </ul>
        </div>
      </div>
    </Router>
    </div>
   );
 }
}

export default App;
