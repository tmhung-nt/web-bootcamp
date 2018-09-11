var express = require("express");
var app = express();

app.get("/", function(req, res){
	// res.send("<h1>Welcome to the homepage</h1>");
	res.render('home.ejs');
})

app.get("/anotherPage/:animal", function(req, res){
	res.render('anotherPage.ejs', {thingVar: req.params.animal})
});

app.listen(3000, function(){
	console.log("Server is started!");
});