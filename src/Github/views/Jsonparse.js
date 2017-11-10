import React, { Component } from 'react';
import { PropTypes } from "prop-types";
import Api from './../fetch.js'
import App from "./../Components/App.js"
 
class Jsonparse extends Component {
 

 
    render() {
       
        var data = JSON.parse(this.props.match.params.data);
        var {id,name,age} = data;
         console.log(data)
        return (
            <App>
               我是jsonpatse  
            </App>
        );
    }
}
 
export default Jsonparse;