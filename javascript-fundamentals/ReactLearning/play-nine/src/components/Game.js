import React from 'react';
import { range } from 'lodash';
import Stars from './Stars';
import Numbers from './Numbers';
import Buttons from './Buttons';
import Answer from './Answer';
import DoneFrame from './DoneFrame';

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
	state = Game.initialGame();

  static randomNumber = () => 1 + Math.floor(Math.random()*9);

  static initialGame = () => ({
    selectedNumbers: [],
    randomNumberOfStars: Game.randomNumber(),
    usedNumbers: [],
    isAnswerCorrect: null,
    remainingDraw: 5,
    gameState: null
  });

  selectNumber = (clickNumber) => {    
    this.setState((prevState) => {
      return  prevState.selectedNumbers.indexOf(clickNumber) >= 0 || prevState.usedNumbers.indexOf(clickNumber) >= 0
              ? {} 
              : { selectedNumbers: prevState.selectedNumbers.concat([clickNumber]), isAnswerCorrect: null};
    })
  }
  
  unselectNumber = (clickNumber) => {
    this.setState( (prevState) => ({selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickNumber)}));    
  }

  checkAnswer = (selectedNumbers, randomNumberOfStars) => {
    const answer = selectedNumbers.reduce( (acc, curVal) => {
      acc += curVal;
      return acc;
    }, 0);
    this.setState( () => {return answer === randomNumberOfStars ? { isAnswerCorrect: true } : { isAnswerCorrect: false };}, this.isGameOver)     
  }
  
  acceptAnswer = () => {
    this.setState((prevState) => {
      return prevState.isAnswerCorrect ? 
      {usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      isAnswerCorrect: [],
      randomNumberOfStars: Game.randomNumber()} : {}      
      }, this.isGameOver);
  }

  getAnotherRandomStars = () => {
    this.setState( prevState => 
      {
        return prevState.remainingDraw > 0 
            ? { randomNumberOfStars: Game.randomNumber(), 
                selectedNumbers: [], 
                isAnswerCorrect: null,
                remainingDraw: prevState.remainingDraw - 1 }
            : {} }, this.isGameOver);
  }

  isGameOver = () => {
    this.setState(prevState => {
      const remainingNumbers = range(1, 10).filter( number => prevState.usedNumbers.indexOf(number) === -1);
      const hasPossibleCombination = possibleCombinationSum(remainingNumbers, prevState.randomNumberOfStars);

      if (prevState.usedNumbers.length === 9 ) {
        return { gameState: 'Win!'};
      }
      if (prevState.remainingDraw === 0 && !hasPossibleCombination) {
        return { gameState: 'Game Over!'} ;
      }
    })
  }

  resetGame = () => {
    this.setState(Game.initialGame())
  }

  render() {
    const { selectedNumbers, randomNumberOfStars, usedNumbers, gameState } = this.state;
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars numberOfStars={randomNumberOfStars}/>
          <Buttons checkAnswer={this.checkAnswer} acceptAnswer={this.acceptAnswer} getAnotherRandomStars={this.getAnotherRandomStars} {...this.state} />
          <Answer selectedNumbers={selectedNumbers} unselectNumber={this.unselectNumber}/>
        </div>
        <br />
        { !gameState  ? <Numbers selectedNumbers={selectedNumbers} selectNumber={this.selectNumber} usedNumbers={usedNumbers} /> : <DoneFrame gameState={gameState} resetGame={this.resetGame}/>   }        
      </div>
    );
  }
}
  
export default Game;