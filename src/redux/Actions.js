import constants from "./Constants";

export const incrementCounter = (amount) => {
  return {
    type: constants.Increment_counter,
    payload: amount
  }
}

export const decrementCounter = (amount) => {
  return {
    type: constants.Decrement_counter,
    payload: amount
  }
}

export const resetCounter = () => {
  return {
    type: constants.Reset_counter
  }
}