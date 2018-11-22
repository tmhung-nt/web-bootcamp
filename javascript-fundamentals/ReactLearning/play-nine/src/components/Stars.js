import React from 'react';
import { range } from 'lodash';

const Stars = (props) => {
  return (
    <div className="col-5">
      {range(props.numberOfStars).map(i =>
        <i key={i} className="fa fa-star"></i>
      )}
      <p>Stars: {props.numberOfStars}</p>
    </div>
  );
};
export default Stars;