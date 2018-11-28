import React, { Component } from 'react';
import './App.css';
import CounterList from '../components/CounterList';
import Controler from './Controler';

class App extends Component {
  render() {
    const counters = this.props.state;
    return (
      <div className="App">
        <CounterList {...counters} />
        <Controler />
      </div>
    );
  }
}

export default App;
