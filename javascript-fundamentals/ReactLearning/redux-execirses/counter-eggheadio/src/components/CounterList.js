import React from 'react';
import './CounterList.css';
import { values } from 'lodash';
import store from '../store';
import { increaseCounter, decreaseCounter } from '../actions';

const Counter = ({counter}) => {
    const { id, value } = counter;

    const increaseCounterHandler = (id) => {
        store.dispatch(increaseCounter(id));
    }

    const decreaseCounterHandler = (id) => {
        store.dispatch(decreaseCounter(id));
    }

    return (
        <div>
            <p>{value}</p>
            <button onClick={increaseCounterHandler.bind(null, id)}>+</button>
            <button className="operationBtn" onClick={decreaseCounterHandler.bind(null, id)}>-</button>
            <hr/>
        </div>
    )
}

const CounterList = ({counters}) => {
    return (
        <div>
            {values(counters).map(counter => <Counter counter={counter} key={counter.id}/>)}
            <br/>
        </div>
    )
}

export default CounterList;