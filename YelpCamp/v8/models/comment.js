var moongose = require("mongoose");

var commentSchema = moongose.Schema({
    text: String,
    author: {
        id: {
            type: moongose.Schema.Types.ObjectId,
            ref: "User"},
        username: String
    }
});

module.exports = moongose.model("Comment", commentSchema);
