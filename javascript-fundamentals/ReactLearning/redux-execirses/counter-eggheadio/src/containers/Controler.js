import React from 'react';
import './Controler.css';
import { addCounter } from '../actions';
import store from '../store';

const Controler = () => {
    const addCounterHandler = () => {
        store.dispatch(addCounter());
    }
    return (
        <div>
            <button onClick={addCounterHandler}>Add Counter</button>
            
            <button className="App__Controler">Remove Counter</button>
        </div>
    )
}

export default Controler;