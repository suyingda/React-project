// import Counter from './index.js'; //组件
import Counter from './../App.js'; //组件
import * as Actions  from './action.js';
import * as Types  from './types.js';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';


Counter.propTypes = {
    value: PropTypes.number.isRequired,
    show: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired,
    jian: PropTypes.func.isRequired,
    chenfa: PropTypes.func.isRequired,
  }
  function b(state) {
    console.log(state,'我是mapStateToProps（state)')
    return {
      value: state.count,
      show: state.show,

    }
  }
 
  function a(dispatch) {
    return {
      onIncreaseClick: () => dispatch(Actions.cc),
      jian: () => dispatch(Actions.cc.type2),
      chenfa:()=>dispatch(Actions.cc.type1)
    }
  }
  // Connected Component
  const App = connect(
    b,
    a
  )(Counter)

  export default App