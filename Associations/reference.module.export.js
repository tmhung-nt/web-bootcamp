var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/associations-demo-reference");

var Post = require("./models/post");
var User = require("./models/user");

//USER - email, name
// var userScheme = new mongoose.Schema({
//     email: String,
//     name: String,
// });
// var User = mongoose.model("User", userScheme); //colection name will be users




// User.create({
//     name: "watarus",
//     email: "watarus.nt@yahoo.com"
// });


//// create post then link to a user
// Post.create({
//     title: "6th reference post",
//     content: "abcasdf34oisdfjiaodsf"
// }, function(err, post){
//     User.findOne({name: "watarus"}, function(err, foundUser){
//         if (err){
//             console.log("ERROR when finding!");
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save(function(err, data){
//                 if (err){
//                     console.log("ERROR when saving!");
//                 } else {
//                     console.log(data);
//                 }
//             });
//         }
//     })    
// });

// //// find user then find all posts for that user
User.findOne({name: "watarus"}).populate("posts").exec(function(err, user){
    if (err) {
        console.log(err);
    } else {
        console.log(user);
    }
})