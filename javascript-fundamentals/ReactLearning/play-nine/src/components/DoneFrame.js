import React from 'react';

const DoneFrame = (props) => {
  return (
    <div className="text-center">
      <h2>{props.gameState}</h2>
      <br/><br/>
      <button className="btn btn-secondary" onClick={props.resetGame}>Play Again!</button>
    </div>
  )
}

  export default DoneFrame;