import React, { Component } from 'react';

 
class Bottom extends Component {
 render() {
   return (
    <div  className="Bot">
        <ul >
            <li>{this.props.title}</li>
        </ul>
    </div>
   );
 }
}

export default Bottom;
