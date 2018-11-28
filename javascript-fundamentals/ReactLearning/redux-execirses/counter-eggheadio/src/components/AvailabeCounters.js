import React from 'react';
import './AvailabeCounters.css';
import { values } from 'lodash';

const Counter = ({counter}) => {
    console.log(counter);
    const { value } = counter;
    return (
        <div>
            <p>{value}</p>
            <button>+</button>
            <button className="operationBtn">-</button>
            <hr/>
        </div>
    )
}

const AvailabeCounters = ({counters}) => {
    console.log('AvailabeCounters')
    console.log(counters);
    return (
        <div>
            {values(counters).map(counter => <Counter counter={counter} key={counter.id}/>)}
            <br/>
        </div>
    )
}

export default AvailabeCounters;