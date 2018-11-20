import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { range } from 'lodash';

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

const Buttons = ({selectedNumbers, isAnswerCorrect, checkAnswer, acceptAnswer, redraw, redraws}) =>{
  let button;
  switch(isAnswerCorrect) {
    case true:
      button = 
      <button className="btn btn-success" onClick={acceptAnswer}>
        <i className="fa fa-check"></i>
      </button>
      break;
    case false:
      button = 
      <button className="btn btn-danger">
        <i className="fa fa-times"></i>
      </button>    
      break;
    default:
      button = <button className="btn" 
                      onClick={checkAnswer}
                      disabled={selectedNumbers.length === 0} >
                      =
               </button>
      break;
  }
  return (
    <div className="col-2">
      {button}
      <br/> <br/>
      <button className="btn btn-warning bnt-sm" onClick={redraw} disabled={redraws === 0}>      
        <i className="fa fa-refresh">{redraws}</i>
      </button>
    </div>
  );
}

const Answer = ({arrayOfNumbers, onRemoveAnswers}) => {
	return (
  	<div className="col-5">
      {arrayOfNumbers.map( (number, i) => <span key={i} onClick={ () => onRemoveAnswers(number) }>{number}</span>)}
    </div>
  );
}

const Numbers = ({arrayOfNumbers, onSelectAnswers, usedNumbers}) => {


  const numberClassName = (number) => {
    if (usedNumbers.indexOf(number) !== -1){
      return 'used';
    }
    if (arrayOfNumbers.indexOf(number) !== -1) {
       return 'selected';
    }
  }
  
	return (
  	<div className="card text-center">
        <div>          
          {LIST.map( (number, i) => <span className={numberClassName(number)} key={i} value={number}
                  onClick={() => {
                    onSelectAnswers(number)
                  }} 
                  // we need to pass a function ref here, not function call --> wrap the call inside an array function
                  // but we are creating new function everytime we select a number
                  // --> better to convert this function component into a class component
                  >
                    {number}
              </span>)}
        </div>
    </div>
  );
}

const DoneFrame = ({doneStatus, resetGame}) => {
  return (
    <div className='text-center'>
      <h2>{doneStatus}</h2>
      <button  onClick={resetGame}>Play Again</button>
    </div>
  )
}

const LIST = range(1, 10);

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

class App extends React.Component {
	render(){
  	return(
    	<div>
    	  <Game />
    	</div>
    );
  }
}

export default App;
