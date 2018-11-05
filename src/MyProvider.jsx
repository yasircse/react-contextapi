import React, { Component } from "react";

const MyContext = React.createContext();

export class MyProvider extends Component {
  state = {
    name: "Yasir",
    age: 33
  };

  getOlder = () => {
    this.setState({
      age: this.state.age + 1
    });
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          getOlder: this.getOlder
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export const Consumer = MyContext.Consumer;
