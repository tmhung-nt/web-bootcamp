var userAnswer = prompt("Are we there yet?");

while (userAnswer != "yes" && userAnswer != "yeah"){
	userAnswer = prompt("Are we there yet?");
}

alert("Yay, we finaly made it!");

function factorial(num) {
	var rel = 1;
	for (i=1; i<= num; i++){
		rel *= i;
	}
	return rel;
}

function kebabToSnake(str) {
	return str.replace(/-/g , "_");
}