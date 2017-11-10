

// import * as Actions  from './action.js';
import * as types from './types.js';

function Reducer(state = types.ssss, action) {

  const count = state.count;
  switch (action.type) {
    case 'suyingda1':
      return { count: count + 100 }
    case 'suyingda2':
      return { count: count -100}
    default:
      return state
  }

}
export default Reducer


