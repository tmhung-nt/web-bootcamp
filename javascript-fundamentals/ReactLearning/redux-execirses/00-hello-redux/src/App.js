import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import { createStore } from 'redux';

const initialState = { tech: 'React'};
const store = createStore(reducer, initialState);

class App extends Component {
  // remove state out of App component as we are going to let Redux manages it
  render() {
    return <HelloWorld tech={store.getState().tech} />;
  }
}

export default App;
