import React, { createContext, useContext } from "react";
import "./App.css";

const ThemeContext = createContext();

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={{ mode: "dark" }}>
        <Button />
      </ThemeContext.Provider>
    </div>
  );
}

function Button() {
  const theme = useContext(ThemeContext);

  return <button>{theme.mode}</button>;
}

export default App;
