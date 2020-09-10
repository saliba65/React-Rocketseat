import React, { useReducer } from "react";
import "./App.css";

function App() {
  const reducer = useReducer(
    function (state, action) {},
    "Lucas",
    function (initialValue) {
      return { name: initialValue };
    }
  );
  console.log(reducer);

  function handlePlus() {}

  function handleMinus() {}

  return (
    <div className="App">
      <h1>0</h1>
      <h4>Cliques: 0</h4>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
}

export default App;
