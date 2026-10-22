import React, { useReducer } from "react";

const initialState = {
  firstCount: 0,
  secondCount: 5,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, firstCount: state.firstCount + action.value };

    case "Decrement":
      return { ...state, firstCount: state.firstCount - action.value };
    case "Increment 2":
      return { ...state, secondCount: state.secondCount + action.value };

    case "Decrement 2":
      return { ...state, secondCount: state.secondCount - action.value };
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

const UseReducerOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count One-{count.firstCount}</div>
      <div>Count Two-{count.secondCount}</div>
      <button onClick={() => dispatch({ type: "Increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "Increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 5 })}>
        Decrement 5
      </button>
      <div>
        {" "}
        <button onClick={() => dispatch({ type: "Increment 2", value: 1 })}>
          Increment 2
        </button>
        <button onClick={() => dispatch({ type: "Decrement 2", value: 1 })}>
          Decrement 2
        </button>
      </div>

      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
};

export default UseReducerOne;
