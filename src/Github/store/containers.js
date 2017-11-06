import Counter from './index.js'; //组件
import * as Actions  from './action.js';
import PropTypes from 'prop-types'
import { Provider, connect } from 'react-redux'


Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired,
    jian: PropTypes.func.isRequired
  }
  function mapStateToProps(state) {
    return {
      value: state.count
    }
  }
 
  function mapDispatchToProps(dispatch) {
    return {
      onIncreaseClick: () => dispatch(Actions.cc),
      jian: () => dispatch(Actions.c2)
    }
  }
  // Connected Component
  const App = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Counter)

  export default App