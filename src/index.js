import React from 'react';
import ReactDOM from 'react-dom';
// import App from './Github/App.js';
// import App from './App.js';
import PropTypes from 'prop-types'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// React component
class Counter extends React.Component {
  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <h1>{value}</h1>
        <button onClick={onIncreaseClick}>点击</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

// Action
const cc = { type: 'suyingda' }; //设置常量  可多个

// Reducer
function Reducer(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'suyingda':
      return { count: count + 1 }
    default:
      return state
  }
}

// Store
const store = createStore(Reducer)
 
// Map Redux state to component props
function mapStateToProps(state) {
  // console.log(state)
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(cc)
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)