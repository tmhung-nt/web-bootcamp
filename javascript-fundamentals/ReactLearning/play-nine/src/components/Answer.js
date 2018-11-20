import React from 'react';


const Answer = ({arrayOfNumbers, onRemoveAnswers}) => {
	return (
  	<div className="col-5">
      {arrayOfNumbers.map( (number, i) => <span key={i} onClick={ () => onRemoveAnswers(number) }>{number}</span>)}
    </div>
  );
}

  
export default Answer;