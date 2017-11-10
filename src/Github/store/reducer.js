

// import * as Actions  from './action.js';
import * as types from './types.js';

function Reducer(state = types.ssss, action) {
 
  //  function Reducer(state =types.ssss , action) {
  const count = state.count;
  const show = state.show;
    if(action.type){
        return {count:count+11}
    } 
}
export default Reducer


