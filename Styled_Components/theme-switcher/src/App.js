import React, { Component } from "react";
import TodoList from "./components/TodoList/index";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { ThemeProvider } from "styled-components";

import * as themes from "./styles/themes";
import ThemeContext from "./styles/themes/context";

class App extends Component {
  state = {
    theme: themes.dark,
  };

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === themes.dark ? themes.light : themes.dark,
    });
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <ThemeSwitcher toggleTheme={this.toggleTheme} />
          <ThemeContext.Consumer>
            {(theme) => (
              <ThemeProvider theme={theme}>
                <TodoList />
              </ThemeProvider>
            )}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
