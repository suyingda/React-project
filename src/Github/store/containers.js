// import Counter from './index.js'; //组件
import Counter from './../App.js'; //组件
import * as Actions  from './action.js';
import * as Types  from './types.js';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';


Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired,
    jian: PropTypes.func.isRequired,
  }
  function a(state) {
    return {
      value: state.count
    }
  }
 
  function b(dispatch) {
    return {
      onIncreaseClick: () => dispatch(Actions.cc),
      jian: () => dispatch(Actions.c2),
    }
  }
  // Connected Component
  const App = connect(
    a,
    b
  )(Counter)

  export default App