import React, { Component } from 'react';
import { PropTypes } from "prop-types";
 
import App from "./../Components/App.js"
 
class Queryloaction extends Component {
    render() {
/*         let data = this.props.location.query;
        let {id,name,age} = data; */
         console.log(this.props)
        return (
            <App>
               Queryloaction  
            </App>
        );
    }
}
 
export default Queryloaction;   