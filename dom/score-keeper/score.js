// getting DOM elements
var scoreInput = document.querySelector("input");
var btn_p1 = document.querySelector("#playerOne");
var btn_p2 = document.querySelector("#playerTwo");
var btn_reset = document.querySelector("#resetBtn");
var p1Display = document.querySelector("span#color1");
var p2Display = document.querySelector("span#color2");
var winningScoreDisplay = document.querySelector("span#inputScore");

// initial values
var p1Score;
var p2Score;
var winningScore;
var gameOver;

// initial values or reset to original values
function initialValues(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	winningScore = 5;
	gameOver = false;
	winningScoreDisplay.textContent = winningScore;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}

function isGameOver(num){
	if (num === winningScore){
		gameOver = true;
	}
}

/////// main

initialValues();

// capture max score
scoreInput.addEventListener("change", function(){
	initialValues();  // reset values when user changes the input score
	winningScore = Number(this.value);
	winningScoreDisplay.textContent = winningScore;
});


// player One gets score
btn_p1.addEventListener("click", function(){
	if (!gameOver){
		p1Score++;
		isGameOver(p1Score);
		if (gameOver){
			p1Display.classList.add("winner");
		}
		p1Display.textContent = p1Score;
	}
})

// player Two gets score
btn_p2.addEventListener("click", function(){
	if (!gameOver){
		p2Score++;
		isGameOver(p2Score);
		if (gameOver){
			p2Display.classList.add("winner");
		}
		p2Display.textContent = p2Score;
	}
})

// reset score
btn_reset.addEventListener("click", function(){
	initialValues();
	scoreInput.value = "";
});
