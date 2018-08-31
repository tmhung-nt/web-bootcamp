// getting DOM elements
var h1 = document.querySelector("h1");
var p = document.querySelector("p");
var scoreInput = document.querySelector("input");
var btn_playerOne = document.querySelector("#playerOne");
var btn_playerTwo = document.querySelector("#playerTwo");
var btn_reset = document.querySelector("#resetBtn");
var spanPlayerOne = document.querySelector("span#color1");
var spanPlayerTwo = document.querySelector("span#color2");

// initial values
var playerOneScore;
var playerTwoScore;
var maxScore;
var isStop;

function initialValues(){
	playerOneScore = 1;
	playerTwoScore = 1;
	maxScore = 5;
	isStop = false;
	showOnUI();
}


function showCurrentScore(){
	// h1.textContent = (playerOneScore - 1) + " to " + (playerTwoScore -1);
	h1.innerHTML = "<h1><span id=\"color1\">" + (playerOneScore - 1)+ "</span> to <span id=\"color2\">" + (playerTwoScore - 1) + "</span></h1>"
}

function showMaxScore(){
	p.textContent = "Playing to: " + maxScore;
}

function showOnUI(){
	// showCurrentScore();
	showMaxScore();	
}
function getMaxScoreFromUI(){
	maxScore = scoreInput.value;
}

function increaseByOne(num){
	var rel = 0;
	if ((num <= maxScore || num === 0) && (!isStop) ){
		rel = num + 1;
	} else {
		rel = num;
		isStop = true;
	}
	return rel;
}

function increaseScoreForPlayerOne(){
	playerOneScore = increaseByOne(playerOneScore);
	spanPlayerOne.textContent = playerOneScore - 1;
	if (playerOneScore === (maxScore + 1)){
		spanPlayerOne.classList.toggle("toGreen");
	}
	// console.log(playerOneScore);
}

function increaseScoreForPlayerTwo(){
	playerTwoScore = increaseByOne(playerTwoScore);
	spanPlayerTwo.textContent = playerTwoScore -1 ;		
	if (playerTwoScore === (maxScore + 1)){
		spanPlayerTwo.classList.toggle("toGreen");
	}
	// console.log(playerTwoScore);
}

/////// main

initialValues();

// modify max score
scoreInput.addEventListener("click", function(){
	getMaxScoreFromUI();
	showOnUI();
});


// player One gets score
btn_playerOne.addEventListener("click", function(){
	increaseScoreForPlayerOne();
	showOnUI();
})

// player One gets score
btn_playerTwo.addEventListener("click", function(){
	increaseScoreForPlayerTwo();
	showOnUI();
})

// reset score
btn_reset.addEventListener("click", function(){
	initialValues();
	scoreInput.value  = '';
	showOnUI();
	spanPlayerOne.classList.remove("toGreen");
	spanPlayerTwo.classList.remove("toGreen");
})




