## React Context Api

According to React official Docs The React Context api facilitates the developer to pass data through the component tree without having to pass props down manually at every level. [https://reactjs.org/docs/context.html] Context is basically used when the data is accessible by many components. It came with react 16.3
```
import React, { Component } from "react";
import Person from "./Person";
import "./App.css";

class App extends Component {
  state = {
    name: "yasir",
    age: 100,
    cool: true
  };
  render() {
    return (
      <div className="App">
        <Person name={`My Name is ${this.state.name}`} />
      </div>
    );
  }
}

export default App;
```
