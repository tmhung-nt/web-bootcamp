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
  static randomNumber =  () => Math.floor(Math.random()*9) + 1;
  static initialState = () => ({
    selectedNumbers: [],
    randomNumberOfStars: Game.randomNumber(),
    usedNumbers: [],
    isAnswerCorrect: null,
    redraws: 2,
    doneStatus: null
  })

  state = Game.initialState();

  selectNumber = (clickNumber) => {
    if (this.state.selectedNumbers.indexOf(clickNumber) >= 0) {return;}
    this.setState((prevState) => ({
      selectedNumbers: prevState.selectedNumbers.concat([clickNumber]),
      isAnswerCorrect: null
    }))
  }

  unselectNumber = (clickNumber) => {
    
    this.setState((prevState) => (
      // {
      // selectedNumbers: prevState.selectedNumbers
      //                           .slice(0, prevState.selectedNumbers.indexOf(clickNumber))  
      //                           .concat(
      //                             prevState.selectedNumbers.slice(prevState.selectedNumbers.indexOf(clickNumber) +1)
      //                           )
      // }
      {
        selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickNumber),
        isAnswerCorrect: null
      }
      ))
  }

  checkAnswer = () => {
    this.setState(prevState => ({
      isAnswerCorrect: prevState.randomNumberOfStars === prevState.selectedNumbers.reduce((acc, curVal) => {
        acc += curVal;
        return acc;
      }, 0)
    }))
  }

  acceptAnswer = () => {
    this.setState(prevState => ({
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      isAnswerCorrect: null,
      randomNumberOfStars: Game.randomNumber()
    }), this.updateDoneStatus);
  }

  redraw = () => {
    this.setState( (prevState) => {
      if (prevState.redraws > 0) {
        return {
          selectedNumbers: [],
          isAnswerCorrect: null,
          randomNumberOfStars: Game.randomNumber(),
          redraws: prevState.redraws - 1
        };
      }      
    }, this.updateDoneStatus)
  }

  possibleSolutions = ({randomNumberOfStars, usedNumbers}) => {
    const possibleNumbers = range(1, 10).filter(number => usedNumbers.indexOf(number) === -1);
    return possibleCombinationSum(possibleNumbers, randomNumberOfStars);
  }

  updateDoneStatus = () => {
    this.setState(prevState => {
      if(prevState.usedNumbers.length === 9){
        return {doneStatus: 'Done. Nice!'}
      }
      if (this.state.redraws ===0 && !this.possibleSolutions(prevState)) {
        return {doneStatus: 'Game Over!'}
      }
    })
  }

  resetGame = () => {
    this.setState(Game.initialState());
  }

  render(){
    const { selectedNumbers, randomNumberOfStars, isAnswerCorrect, usedNumbers, redraws, doneStatus} = this.state;
    return (
    <div className="container">
      <h3>Play Nine</h3>
      <hr />
      <div className="row">
        <Stars numberOfStars={randomNumberOfStars}/>
        <Buttons selectedNumbers={selectedNumbers} randomNumber={randomNumberOfStars} checkAnswer={this.checkAnswer} isAnswerCorrect={isAnswerCorrect} acceptAnswer={this.acceptAnswer} redraw={this.redraw} redraws={redraws}/>
        <Answer arrayOfNumbers={selectedNumbers} onRemoveAnswers={this.unselectNumber} />
      </div>
      <br/>
      { doneStatus ? 
        <DoneFrame doneStatus={doneStatus} resetGame={this.resetGame}/>
        :<Numbers arrayOfNumbers={ selectedNumbers} onSelectAnswers={this.selectNumber} usedNumbers={usedNumbers}/>
      
      }
    </div>      
    );
  }
}
  
export default Game;