import React, { Component } from 'react';
import './App.css';
import AvailableCounters from '../components/AvailabeCounters';
import Controler from './Controler';

class App extends Component {
  render() {
    const counters = this.props.state;
    return (
      <div className="App">
        <AvailableCounters {...counters} />
        <Controler />
      </div>
    );
  }
}

export default App;
