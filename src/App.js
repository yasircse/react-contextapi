import React, { Component } from "react";
import Family from "./Family";
import { MyProvider } from "./MyProvider";
class App extends Component {
  render() {
    return (
      <MyProvider>
        <Family />
      </MyProvider>
    );
  }
}

export default App;
