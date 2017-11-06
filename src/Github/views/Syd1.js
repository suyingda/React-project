import React, { Component } from 'react';
import App from "./../Components/App.js";


 
class Syd1 extends Component {
    render() {
        const { value, onIncreaseClick,jian} = this.context
        return (
            <App>
    
          <h1>{value}</h1>
          <button onClick={onIncreaseClick}>点击</button>
          <button onClick={jian}>点击</button>
            </App>
        );
    }
}

export default Syd1;