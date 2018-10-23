var moongose = require("mongoose");

var commentSchema = moongose.Schema({
    text: String,
    author: String
});

module.exports = moongose.model("Comment", commentSchema);
