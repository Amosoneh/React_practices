import React, { useReducer } from "react";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREMENT_BY = "INCREMENT BY";

const increment = () => {
  return {
    type: INCREMENT,
  };
};
const decrement = () => {
  return {
    type: DECREMENT,
  };
};
const incrementBy = (amount) => {
  return {
    type: INCREMENT_BY,
    psyload: amount,
  };
};
const initialState = {
  count: 0,
};

const reducer = (action, state) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case INCREMENT_BY:
      return { ...state, count: state.count + action.psyload };
    default:
      return state;
  }
};
const Counter = () => {
  const [counterState, dispatchCounter] = useReducer(reducer, initialState);
  return (
    <>
      <button onClick={() => {}}>Increment</button>
      <button onClick={() => {}}>Decrement</button>
      <input type="text" onChange={() => {}} />
      <button onClick={() => {}}>Increment By</button>
    </>
  );
};

export default Counter;
