import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./Button.js";

const theme = {
  primary: "white",
  secondary: "lightblue",
  alert: "yellow",
  font: "sans-serif",
};

const H1 = styled.h1`
  font-family: ${(props) => props.theme.font};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <H1>Styled Components</H1>
        <form action="">
          <input type="text" />
          <Button color="primary">Create</Button>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default App;
