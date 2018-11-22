import React from 'react';

const DoneFrame = ({doneStatus, resetGame}) => {
    return (
      <div className='text-center'>
        <h2>{doneStatus}</h2>
        <button  onClick={resetGame}>Play Again</button>
      </div>
    )
  }

  export default DoneFrame;