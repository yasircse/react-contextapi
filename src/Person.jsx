import React, { Component } from "react";
import { Consumer } from "./MyProvider";

class Person extends Component {
  render() {
    return (
      <Consumer>
        {context => {
          return (
            <div>
              <p>{`My Name is ${context.state.name}`}</p>
              <p>{`I'm ${context.state.age} years old`}</p>
              <button onClick={context.getOlder}>Get Old</button>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Person;
