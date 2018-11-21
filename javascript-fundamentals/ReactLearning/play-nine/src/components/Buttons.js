import React from 'react';

const Buttons = (props) => {
  let buttonToBeRendered;
  switch (props.isAnswerCorrect) {
    case true :
      buttonToBeRendered = <button className="btn btn-success"><i className="fa fa-check"></i></button>;
      break;
    case false :
      buttonToBeRendered = <button className="btn btn-danger"><i className="fa fa-times"></i></button>;
      break;
    default: 
      buttonToBeRendered = <button onClick={ () => props.checkAnswer(props.selectedNumbers, props.randomNumberOfStars)}>=</button>
  };
  return (
    <div className="col-2 text-center">
      {buttonToBeRendered}
      <p>{props.isAnswerCorrect === null ? 'Click To Verify Answer' : ''}</p>
    </div>
  );
};

export default Buttons;