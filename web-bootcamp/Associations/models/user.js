var mongoose = require("mongoose");

//reference post data to user schema 
//// -------create new user schema which has posts entity
//USER - email, name
var userScheme = new mongoose.Schema({
    email: String,
    name: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
});
var User = mongoose.model("User", userScheme); //colection name will be users
module.exports = User;
