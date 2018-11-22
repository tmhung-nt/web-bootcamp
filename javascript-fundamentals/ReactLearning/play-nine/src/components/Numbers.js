import React from 'react';
import { range } from 'lodash';


const Numbers = (props) => {
	const numberClassName = (number) => {
    if (props.usedNumbers.indexOf(number) >= 0) {
    	return 'used';
    }
		if (props.selectedNumbers.indexOf(number) >= 0) {
    	return 'selected';
    }  	
  }
  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number, i) =>
          <span key={i} 
            onClick={ () => props.selectNumber(number)}
            className={numberClassName(number)} >
            {number} 
          </span>
        )}
      </div>
    </div>
  );
};

Numbers.list = range(1, 10);
export default Numbers;