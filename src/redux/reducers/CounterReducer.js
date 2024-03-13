import constants from "../Constants"

const initialState = {
  counter: 0
}

const CounterReducer = (state=initialState,action) => {
  switch(action.type) {
    case constants.Increment_counter:
      return {
        counter: state.counter + 1
      }
    case constants.Decrement_counter:
      return {
        counter: state.counter - 1
      }
    case constants.Reset_counter:
      return {
        counter: 0
      }  
    default:
      return state
  }
}

export default CounterReducer