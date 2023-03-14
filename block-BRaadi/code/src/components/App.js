import React from "react";
import Header from "./Header";
import Main from "./Main";

class App extends React.Component {
  state = {
    isDarkMode: false,
  };
  render() {
    let { isDarkMode } = this.state;
    return (
      <>
        <Header isDarkMode={isDarkMode} />
        <Main isDarkMode={isDarkMode} />
      </>
    );
  }
}

export default App;
