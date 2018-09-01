var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input[type=\"number\"]")
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var winningScoreDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

function isGameOver(num){
	if (num === winningScore){
		gameOver = true;
	}
	if (gameOver){
		console.log("GAME OVER!!!");
	}
}

function reset(){
	p1Score = 0;
	p2Score = 0;
	gameOver = false;
	winningScore = 5;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}

// main 
numInput.addEventListener("change", function(){
	reset();
	winningScore = Number(this.value);
	winningScoreDisplay.textContent = winningScore;
});

p1Button.addEventListener("click", function(){
	if (!gameOver){
		p1Score++;
		isGameOver(p1Score);
		p1Display.textContent = p1Score;
		if (gameOver){
			p1Display.classList.add("winner");
		}		
	}
});

p2Button.addEventListener("click", function(){
	if (!gameOver){
		p2Score++;
		isGameOver(p2Score);
		p2Display.textContent = p2Score;		
		if (gameOver){
			p2Display.classList.add("winner");
		}
	}
});

resetButton.addEventListener("click", reset);