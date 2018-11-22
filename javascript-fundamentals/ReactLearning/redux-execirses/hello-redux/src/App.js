import React, { Component } from "react";
import HelloWorld from "./HelloWorld";

class App extends Component {
  // remove state out of App component as we are going to let Redux manages it
  render() {
    return <HelloWorld tech={this.state.tech} />;
  }
}

export default App;
