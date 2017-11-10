import React, { Component } from 'react';
import App from "./../Components/App.js";

import { PropTypes } from "prop-types";

class Syd1 extends Component {
 
    render() {
        const { value, onIncreaseClick, jian} = this.context.a
         
        return (
            <App>
                  <h1>{value}</h1>
               <button onClick={onIncreaseClick}>点击</button>
                <button onClick={jian}>点击</button>
            </App>
        );
    }
}
Syd1.contextTypes = {
    a: PropTypes.object,
}
export default Syd1;