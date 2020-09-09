import React, { useState, useEffect } from "react";

function App() {
  const [couter, setCouter] = useState(0);
  //console.log(state);
  const [name, setName] = useState(" ");

  useEffect(() => {
    console.log("name");
  }, [name]);

  useEffect(() => {
    console.log("couter");
  }, [couter]);

  useEffect(() => {
    console.log("First render");
  }, []);

  //E possivel ter varios useEffect no msm arquivo
  useEffect(() => {
    console.log("useEffect funcionou !");

    return () => {
      console.log("vai desmotar...");
    };
  }, []);

  function handleAdd() {
    setCouter((prevState) => prevState + 1);
  }

  function handleMinus() {
    setCouter((prevState) => prevState - 1);
  }

  return (
    <div>
      <h1>{couter}</h1>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleMinus}>-</button>

      <br />
      <span>{name}</span>
      <bt />
      <input onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default App;
