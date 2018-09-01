var colors;
var numberOfColors;
var isHardMode = true;
// console.log(colors); 
var squares = document.querySelectorAll("div.square");
var pickedColor;
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var spans = document.querySelectorAll("span");
var h1 = document.querySelector("h1");
var btnPlayAgain = document.querySelector("#reset");
var btnEasy = document.querySelector("#easy");
var btnHard = document.querySelector("#hard");

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
	for (var i = 0; i < numberOfColors; i++){
		squares[i].style.background = color;
	}
	//change color of h1 element to match given color
	h1.style.background = color;
}

function reset(){
	//initial or reset game's state
	btnPlayAgain.textContent = "NEW COLORS";
	messageDisplay.textContent = "";
	h1.style.background = "#232323";
	colors = {};
	// isHardMode = true;
	if (isHardMode){
		btnHard.selected = 'selected';
		numberOfColors = 6;
	} else {
		btnEasy.selected = 'selected';
		numberOfColors = 3;
	}
	colors = generateRandomColors(numberOfColors);
	console.log("colors: " + colors);
	fillColorToCells();
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

}

function changeGameMode(flag){
	isHardMode = flag;
	reset(); //to create new colors and refresh html content 
	var notHardModeCells = document.querySelectorAll(".notHardMode");
	if (!isHardMode){
		// hide 3 last celss
		for (var i = 0; i < numberOfColors; i++){
			// notHardModeCells[i].style.background = "#232323";
			notHardModeCells[i].style.display = "none";  //https://developer.mozilla.org/en-US/docs/Web/CSS/display
		}
		btnEasy.classList.add("selected");
		btnHard.classList.remove("selected");
	} else {
		//enable all 6 cells
		for (var i = 0; i < notHardModeCells.length; i++){
			// notHardModeCells[i].style.background = "#232323";
			notHardModeCells[i].style.display = "block"; //https://developer.mozilla.org/en-US/docs/Web/CSS/display
		}
		btnEasy.classList.remove("selected");
		btnHard.classList.add("selected");
	}
}

function fillColorToCells(){
	for ( var i = 0; i < numberOfColors; i++){
		//add initial colors to squares
		squares[i].style.background = colors[i];
	}
}

function actionOnClick(){
	for ( var i = 0; i < squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
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
		});
	}	
}

// main
reset();  // start the game and initial global variables

actionOnClick();

btnEasy.addEventListener("click", function(){
	changeGameMode(false); //false is value of isHardMode variable
})

btnHard.addEventListener("click", function(){
	changeGameMode(true); //true is value of isHardMode variable
})

btnPlayAgain.addEventListener("click", reset);