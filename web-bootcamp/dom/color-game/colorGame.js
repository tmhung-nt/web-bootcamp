var colors;
var numSquares;
var isHardMode = true;

var squares = document.querySelectorAll("div.square");
var pickedColor;
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var spans = document.querySelectorAll("span");
var h1 = document.querySelector("h1");
var btnPlayAgain = document.querySelector("#reset");
var gameModeBtns = document.querySelectorAll(".gameMode");

function pickColor(){
	//Math.random() returns a float number between 0 and 1
	//multiply by (colors.length) to get a random from 0 to colors.length (6), but not 6
	//use Math.floor() to get the largest integer less than or equal to a given number. 
	var randomIndex = Math.floor(Math.random() * colors.length);
	return colors[randomIndex];
}

function randomColor(){
	//pick a "red" from 0 - 255
	var red = Math.floor(Math.random()* 256);
	//pick a "green" from 0 - 255
	var green = Math.floor(Math.random()* 256);
	//pick a "blue" from 0 - 255
	var blue = Math.floor(Math.random()* 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function generateRandomColors(number){
	var arr = [];
	for (var i = 0; i < number; i++){
		arr.push(randomColor());
	}
	return arr;
}

function changeColor(color){
	//loop through all squares
	//change each color to match given color
	for (var i = 0; i < numSquares; i++){
		squares[i].style.background = color;
	}
	//change color of h1 element to match given color
	h1.style.background = color;
}

function setUpHardMode(){
	numSquares = 6;  
	for (var i = 0; i < numSquares; i++){
		squares[i].style.display = "block";
	}	
}

function setUpEasyMode() {
	numSquares = 3;
	for (var i = 0; i < numSquares; i++){
		squares[i + numSquares].style.display = "none";
	}	
}

function changeGameMode(){	
	for (var i = 0; i < gameModeBtns.length; i++){
		gameModeBtns[i].addEventListener("click", function(){
			// remove selected class out of gameModeButtons and add it in for clicked one
			gameModeBtns[0].classList.remove("selected");
			gameModeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			// modify number of squares based on which button is clicked
			this.textContent === "EASY" ? isHardMode = false : isHardMode = true;
			reset();
		});
	}
}

function fillColorToCells(){
	for ( var i = 0; i < numSquares; i++){
		//add initial colors to squares
		squares[i].style.background = colors[i];
	}
}

function addListererToSquares(){
	//add click listeners to squares
	for ( var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", setUpSquares);
	}	
}

function reset(){
	//initial or reset game's state
	btnPlayAgain.textContent = "NEW COLORS";
	messageDisplay.textContent = "";
	h1.style.background = "steelblue";
	colors = {};
	isHardMode ? setUpHardMode() : setUpEasyMode();
	colors = generateRandomColors(numSquares);
	console.log("colors: " + colors);
	fillColorToCells();
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
}

function setUpSquares(){
	// grab color of clicked square
	var clickedColor = this.style.background;
	//compare color to pickedColor
	if (clickedColor === pickedColor){
		messageDisplay.textContent = "Correct!";
		changeColor(pickedColor);
		btnPlayAgain.textContent = "Play Again?";
	} else {
		this.style.background = "#232323";  
		messageDisplay.textContent = "Try Again";
	}	
}

function init(){
	reset();  // start the game and initial global variables
	addListererToSquares();	
}

// main
init();

changeGameMode(); //add listeners and setUp to change game mode

btnPlayAgain.addEventListener("click", reset);