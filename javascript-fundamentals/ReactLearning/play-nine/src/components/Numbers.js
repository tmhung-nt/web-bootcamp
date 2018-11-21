import React from 'react';
import { range } from 'lodash';

const LIST = range(1, 10);

const Numbers = ({arrayOfNumbers, onSelectAnswers, usedNumbers}) => {


    const numberClassName = (number) => {
      if (usedNumbers.indexOf(number) !== -1){
        return 'used';
      }
      if (arrayOfNumbers.indexOf(number) !== -1) {
         return 'selected';
      }
    }
    
      return (
        <div className="card text-center">
          <div>          
            {LIST.map( (number, i) => <span className={numberClassName(number)} key={i} value={number}
                    onClick={() => {
                      onSelectAnswers(number)
                    }} 
                    // we need to pass a function ref here, not function call --> wrap the call inside an array function
                    // but we are creating new function everytime we select a number
                    // --> better to convert this function component into a class component
                    >
                      {number}
                </span>)}
          </div>
      </div>
    );
  }

export default Numbers;