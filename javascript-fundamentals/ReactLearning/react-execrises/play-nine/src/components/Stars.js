import React from 'react';
import { range } from 'lodash';

const Stars = ({numberOfStars}) => {
  
    // let stars = [];
    // for (let i = 0; i < numberOfStars; i++){
    //   stars.push(<i className="fa fa-star"/>);
    // }
      // return (
    // 	<div className="col-5">
    //     {stars}
    //   </div>
    // );
    return (
      <div className="col-5">
        {range(numberOfStars).map( (i) => <i key={i} className="fa fa-star"/>)}
      </div>
    )
  }
  
export default Stars;