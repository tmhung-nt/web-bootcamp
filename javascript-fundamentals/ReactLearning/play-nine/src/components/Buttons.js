import React from 'react';

const Buttons = (props) => {
  let buttonToBeRendered;
  switch (props.isAnswerCorrect) {
    case true :
      buttonToBeRendered = <button className="btn btn-success" onClick={props.acceptAnswer}>
           <i className="fa fa-check"></i>
        </button>;
      break;
    case false :
      buttonToBeRendered = <button className="btn btn-danger">
            <i className="fa fa-times"></i>
        </button>;
      break;
    default: 
      buttonToBeRendered = <button onClick={ () => props.checkAnswer(props.selectedNumbers, props.randomNumberOfStars)}>=</button>
  };
  return (
    <div className="col-2 text-center">
      {buttonToBeRendered}
      <br/><br/>
      <button className="btn btn-warning"  onClick={props.getAnotherRandomStars}><i className="fa fa-refresh">{props.remainingDraw}</i></button>
    </div>
  );
};

export default Buttons;