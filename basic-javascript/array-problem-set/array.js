function printReserver(arr){
	console.log("**************");
	for (var i = arr.length - 1; i>=0; i--){
		console.log(arr[i]);
	}
	console.log("**************");
}

function isUniform(arr) {
	var rel = true;
	for (var i = 1; i < arr.length; i++){
		if (arr[i] != arr[0]){
			rel = false;
			break;
		}		
	}
	return rel;
}


function sumArray(arr){
	var sum = 0;
	arr.forEach(function(index){
		sum += index;		
	})
	return sum;
}

function maxArray(arr){
	var max= arr[0];
	for (var i = 1; i < arr.length; i++){
		if (max < arr[i]){
			max = arr[i];
		}
	}
	return max;
}

var someObj = {
 friends: [
    {name: "Malfoy"},
    {name: "Crabbe"},
    {name: "Goyle"}
],
 color: "baby blue",
 isEvil: true
};

var someObj = {
   friends: [
       {name: "Malfoy"},
       {name: "Crabbe"},
       {name: "Goyle"}
],
   color: "baby blue", 
   isEvil: true,
 };


 var movies = [
 	{title: "ABC", isWatched: false, rating: 3},
 	{title: "TCB", isWatched: true, rating: 4},
 	{title: "BIDV", isWatched: false, rating: 3.5},
 ];

 function buildString(movie){
 	var str = "You have ";
 	if (movie.isWatched) {
 		str += "seen ";
 	} else {
 		str += "not seen ";
 	}
 	str += "\"" + movie.title + "\"" + " - " + movie.rating + " starts";
 	return str;
 }

 movies.forEach(function(movie){
 	console.log(buildString(movie));
 })