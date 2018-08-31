var age = prompt("How old are you?");

// if ( age < 18 ) {
// 	console.log("You are under 18, not old enough to enter the venue!");
// } else if (age < 21) {
// 	console.log("You can enter, but can't drink!");
// } else {
// 	console.log("Come on in, you can drink!");
// }


if ( age < 0 ) {
	console.log("This is an error message!");
} else if (age === 21) {
	console.log("Happy 21st birthday!");
} else if ( age % 2 != 0) {
	console.log("Your age is odd!");
} else if( Number.isInteger(Math.sqrt(age))) {
	console.log("perfect square");
}