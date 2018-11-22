import React from 'react';

const DoneFrame = (props) => {
  return (
    <div className="text-center">
      <p>{props.gameState}</p>
      <br/><br/>
      <button onClick={props.resetGame}>Play Again!</button>
    </div>
  )
}

  export default DoneFrame;