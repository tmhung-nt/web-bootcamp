// getting DOM elements
var h1 = document.querySelector("h1");
var p = document.querySelector("p");
var scoreInput = document.querySelector("input");
var btn_playerOne = document.querySelector("#playerOne");
var btn_playerTwo = document.querySelector("#playerTwo");
var btn_reset = document.querySelector("#resetBtn");
var spanPlayerOne = document.querySelector("span#color1");
var spanPlayerTwo = document.querySelector("span#color2");
var spanScore = document.querySelector("span#inputScore");

// initial values
var playerOneScore;
var playerTwoScore;
var maxScore;
var isStop;
var isToggle;

function initialValues(){
	playerOneScore = 0;
	playerTwoScore = 0;
	spanPlayerOne.textContent = playerOneScore;
	spanPlayerTwo.textContent = playerTwoScore;
	maxScore = 5;
	isStop = false;
	isToggle = false;
	showMaxScore();
}

function showMaxScore(){
	spanScore.textContent = maxScore;
}

function getMaxScoreFromUI(){
	maxScore = Number(scoreInput.value);
	isStop = false;
	isToggle = false;
	console.log("Current maxScore = " + maxScore);
}

function increaseByOne(num){
	var rel = 0;
	console.log("condition: " + (num < maxScore || num === 0) && (!isStop) );
	if ((num < maxScore || num === 0) && (!isStop) ){
		rel = num + 1;
		if (rel === maxScore){
			isStop = true;
		}
	} else {
		rel = num;
		isStop = true;
	}
	return rel;
}

function increaseScoreForPlayerOne(){
	playerOneScore = increaseByOne(playerOneScore);
	spanPlayerOne.textContent = playerOneScore;	
	if (isStop && (!isToggle)){
		spanPlayerOne.classList.toggle("toGreen");
		isToggle = true;		
	}
	console.log("increaseScoreForPlayerOne.isToggle: " + isToggle);
}

function increaseScoreForPlayerTwo(){
	playerTwoScore = increaseByOne(playerTwoScore);
	spanPlayerTwo.textContent = playerTwoScore;		
	if (isStop && (!isToggle)){
		spanPlayerTwo.classList.toggle("toGreen");
		isToggle = true;		
	}
	console.log("increaseScoreForPlayerTwo.isToggle: " + isToggle);
}

/////// main

initialValues();

// modify max score
scoreInput.addEventListener("click", function(){
	getMaxScoreFromUI();
	showMaxScore();
});


// player One gets score
btn_playerOne.addEventListener("click", function(){
	increaseScoreForPlayerOne();
	showMaxScore();
})

// player Two gets score
btn_playerTwo.addEventListener("click", function(){
	increaseScoreForPlayerTwo();
	showMaxScore();
})

// reset score
btn_reset.addEventListener("click", function(){
	initialValues();
	scoreInput.value  = '';
	showMaxScore();
	spanPlayerOne.classList.remove("toGreen");
	spanPlayerTwo.classList.remove("toGreen");
})
