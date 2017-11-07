import React, { Component } from 'react';
import { PropTypes } from "prop-types";
import Api from './../fetch.js'
import App from "./../Components/App.js"

// import His from './../Mixin.js'
class Syd2 extends Component {
    constructor(a, context) {
        super();
        console.log(context)
  
        
    }

    fn() {
        // His.push('/Content')
    }
    render() {
       
      
        return (
            <App>
                
           {this.context.a.value}
                <div onClick={this.fn.bind(this)}>我是第二个点击</div>
            </App>
        );
    }
}
Syd2.contextTypes = {
    a: PropTypes.object,
   
}
export default Syd2;