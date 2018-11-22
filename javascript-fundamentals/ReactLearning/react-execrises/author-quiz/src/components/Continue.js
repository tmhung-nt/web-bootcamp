import React from 'react';

const Continue = (props) => {
    return (
      <button className="btn btn-primary" style={{marginLeft: '85%', display: props.show}} onClick={props.toNextQuiz}>Next</button>
    );
  }

export default Continue;