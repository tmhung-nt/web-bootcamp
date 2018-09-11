var express = require('express');
var app = express();

app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal/", function(req, res){
	var sounds = {
		pig: "Oink",
		cow: "Mow",
		dog: "Woof Woof!",
		cat: "Meow!",
		goldfish: "..."
	};
	var animal = req.params.animal.toLowerCase();
	// if (animal === "pig"){
	// 	sound = "Oink";
	// } else if (animal === "cow"){
	// 	sound = "Moo";
	// } else if (animal === "dog"){
	// 	sound = "Woof Woof!";
	// }
	res.send("The " + animal + " says \"" + sounds[animal] + "\"");
});

app.get("/repeat/:verb/:num", function(req, res){
	var verb = req.params.verb;
	var num = req.params.num;
	var str = "";
	for (var i = 0; i < num; i++){
		str += verb + " ";
	}
	res.send(str);

});

app.get("*", function(req, res){
	res.send("Sorry, page not found...What are you doing with your life?")
});

// Tell Express to listen for requests (start server)
app.listen("3000", function(){
    console.log("Server has started!!!")
});