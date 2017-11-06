import React, { Component } from 'react';
 
 

class Counter extends React.Component {
    render() {
      const { value, onIncreaseClick,jian} = this.props
      return (
        <div>
          <h1>{value}</h1>
          <button onClick={onIncreaseClick}>点击</button>
          <button onClick={jian}>点击</button>
        </div>
      )
    }
  } 
export default Counter;
