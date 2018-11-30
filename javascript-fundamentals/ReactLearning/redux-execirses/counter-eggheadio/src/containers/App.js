import React, { Component } from 'react';
import './App.css';
import CounterList from '../components/CounterList';
import Controler from './Controler';
import { connect } from 'react-redux';

class App extends Component {
  render() {  
    return (
      <div className="App">
        <CounterList {...this.props} />
        <Controler />
      </div>
    );
  }
}

const mapStateToProps = state => state;



export default connect(mapStateToProps)(App); 
