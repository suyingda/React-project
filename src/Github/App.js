import React, { Component } from 'react';
import './css/index.css'
import Router from './router.js'
import { PropTypes } from "prop-types";

class App extends Component {
  constructor(props) {
    super();
     /* this.state = {
      a:1
    }  */
  }
  render() {
    
    return (
      <div>
        <Router />
      </div>
    );
  }
    getChildContext() {
    return {
        a: this.props
    }
}  
}
  App.childContextTypes = {
  a: PropTypes.object
}  
export default App;


 
