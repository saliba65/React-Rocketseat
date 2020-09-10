import React, { useReducer } from "react";
import "./App.css";

function reducer(state, action) {
  //switch/case poderia ser usado aqui tambem, 'switch(action.type)'
  if (action.type === "plus") {
    return {
      couter: state.couter + 1,
      clicks: state.clicks + 1,
    };
  }

  if (action.type === "minus") {
    return {
      couter: state.couter - 1,
      clicks: state.clicks + 1,
    };
  }
}

const initialValue = {
  couter: 0,
  clicks: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  function handlePlus() {
    dispatch({ type: "plus" });
  }

  function handleMinus() {
    dispatch({ type: "minus" });
  }

  return (
    <div className="App">
      <h1>{state.couter}</h1>
      <h4>Cliques: {state.clicks}</h4>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
}

export default App;
