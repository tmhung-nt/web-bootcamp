import React from 'react';
import { range } from 'lodash';

const Stars = (props) => {
  const numberOfStars = 1 + Math.floor(Math.random()*9);

  return (
    <div className="col-5">
      {range(numberOfStars).map(i =>
        <i key={i} className="fa fa-star"></i>
      )}
    </div>
  );
};
export default Stars;