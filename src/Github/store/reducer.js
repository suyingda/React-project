 


 function Reducer(state = { count: 0 }, action) {
   
    const count = state.count
    switch (action.type) {
      case true:
        return { count: count + 1 }
     case false:
        return { count: count - 1 }
      default:
        return  state
    }
  } 

  export default Reducer
  

  