import React from 'react';
import './Controler.css';
import { addCounter, removeCounter } from '../actions';
import store from '../store';

const Controler = () => {
    const addCounterHandler = () => {
        store.dispatch(addCounter());
    }

    const removeCounterHandler = () => {
        store.dispatch(removeCounter())
    }
    return (
        <div>
            <button onClick={addCounterHandler}>Add Counter</button>
            
            <button className="App__Controler" onClick={removeCounterHandler}>Remove Counter</button>
        </div>
    )
}

export default Controler;