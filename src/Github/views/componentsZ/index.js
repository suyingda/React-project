import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Aaa extends Component {
    constructor (props) {
      super();
      this.state = { smiling: false };
    }
    componentWillMount () {
        console.log(1)
      };
      componentDidMount () {
        console.log(11)
      };
      componentWillUnmount () {
        console.log(111)
      };
  /*  handleClick(){
      this.setState({smiling: !this.state.smiling});
    };
     
 
    smilingMessage () {
      return (this.state.smiling) ? "is smiling" : "";
    };*/
    render () {
      return (
        // <div onClick={this.handleClick.bind(this)}>
        <div  >
          {this.props.name}
            {/* {this.smilingMessage.bind(this)}   */}
        </div>
      );
    }
  }
  
 /*  Person.defaultProps = {
    name: 'Guest'
  };
  
  Person.propTypes = {
    name: React.PropTypes.string
  };
   */
  export default Aaa;
 