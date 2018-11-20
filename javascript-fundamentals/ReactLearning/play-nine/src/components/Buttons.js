import React from 'react';

const Buttons = ({selectedNumbers, isAnswerCorrect, checkAnswer, acceptAnswer, redraw, redraws}) =>{
    let button;
    switch(isAnswerCorrect) {
      case true:
        button = 
        <button className="btn btn-success" onClick={acceptAnswer}>
          <i className="fa fa-check"></i>
        </button>
        break;
      case false:
        button = 
        <button className="btn btn-danger">
          <i className="fa fa-times"></i>
        </button>    
        break;
      default:
        button = <button className="btn" 
                        onClick={checkAnswer}
                        disabled={selectedNumbers.length === 0} >
                        =
                 </button>
        break;
    }
    return (
      <div className="col-2">
        {button}
        <br/> <br/>
        <button className="btn btn-warning bnt-sm" onClick={redraw} disabled={redraws === 0}>      
          <i className="fa fa-refresh">{redraws}</i>
        </button>
      </div>
    );
  }

export default Buttons;