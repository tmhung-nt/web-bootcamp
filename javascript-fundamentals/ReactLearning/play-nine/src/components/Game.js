import React from 'react';
import Stars from './Stars';
import Numbers from './Numbers';
import Buttons from './Buttons';
import Answer from './Answer';

const possibleCombinationSum = function(arr, n) {
  if (arr.indexOf(n) >= 0) { return true; }
  if (arr[0] > n) { return false; }
  if (arr[arr.length - 1] > n) {
    arr.pop();
    return possibleCombinationSum(arr, n);
  }
  var listSize = arr.length, combinationsCount = (1 << listSize)
  for (var i = 1; i < combinationsCount ; i++ ) {
    var combinationSum = 0;
    for (var j=0 ; j < listSize ; j++) {
      if (i & (1 << j)) { combinationSum += arr[j]; }
    }
    if (n === combinationSum) { return true; }
  }
  return false;
};


class Game extends React.Component {
	state = {
    selectedNumbers: []
  };

  
  
  render() {
    const { selectedNumbers } = this.state;
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars />
          <Buttons />
          <Answer selectedNumbers={selectedNumbers} unselectNumber={this.unselectNumber}/>
        </div>
        <br />
        <Numbers selectedNumbers={selectedNumbers} selectNumber={this.selectNumber}/>
      </div>
    );
  }
}
  
export default Game;