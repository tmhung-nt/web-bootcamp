var mongoose = require("mongoose");

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
module.exports = mongoose.model("Post", postSchema); //collection name will be posts

// var Post = mongoose.model("Post", postSchema); //collection name will be posts
// module.exports = Post;


