var playerOne = 0;
var playerTwo = 0;
var isReset = false;

var maxScore = 5;

var h1 = document.querySelector("h1");
var p = document.querySelector("p");

function modifyCurrentScore(){
	h1.textContent = playerOne + " to " + playerTwo;
}

function modifyMaxScore(){
	p.textContent = "Playing to: " + maxScore;
}

modifyCurrentScore();
modifyMaxScore();