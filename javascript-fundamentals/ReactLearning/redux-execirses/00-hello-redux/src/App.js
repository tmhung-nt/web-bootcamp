import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import ButtonGroup from './ButtonGroup';
import { store } from './store';

class App extends Component {
  // remove state out of App component as we are going to let Redux manages it
  render() {
    return [
      <HelloWorld key={1} tech={store.getState().tech}/>,
      <ButtonGroup key={2} technologies={['React', 'ELM', 'React-redux']} />
    ] ;
  }
}

export default App;
