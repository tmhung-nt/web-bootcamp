//create secret number
var secretNumber = 4;

//ask user for guess
var guess = Number(prompt("Guess a number"));

//check if guess is right
if (guess === secretNumber) {
	alert("You got it right!");
} else if ( guess > secretNumber ) { //check if guess is higher
	alert("Too high, guess again!");
} else {
	alert("Too low, guess again!");
}