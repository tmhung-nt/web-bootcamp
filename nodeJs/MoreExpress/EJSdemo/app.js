var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	// res.send("<h1>Welcome to the homepage</h1>");
	res.render('home');
})

app.get("/anotherPage/:animal", function(req, res){
	res.render('anotherPage', {thingVar: req.params.animal});
});

app.get("/posts", function(req, res){
	var posts = [
		{title: "Post 1", author: "W"},
		{title: "Post 2", author: "A"},
		{title: "Post 3", author: "T"},
		{title: "Post 4", author: "A"},
		{title: "Post 5", author: "R"},
		{title: "Post 6", author: "U"},
		{title: "Post 7", author: "S"},
	];
	res.render("posts", {posts: posts});
})

app.listen(3000, function(){
	console.log("Server is started!");
});