var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/associations-demo");


//USER - email, name
// var userScheme = new mongoose.Schema({
//     email: String,
//     name: String,
// });
// var User = mongoose.model("User", userScheme); //colection name will be users

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema); //collection name will be posts

// newUser.save(function(err, user){
//     if (err){
//         console.log("ERROR!!!");
//     } else {
//         console.log(user)
//     }
// });


// var newPost = new Post({
//     title: "relate to embed post",
//     content: "Was drawing natural fat respect husband. An as noisy an offer drawn blush place. These tried for way joy wrote witty. In mr began music weeks after at begin. Education no dejection so direction pretended household do to. Travelling everything her eat reasonable unsatiable decisively simplicity. Morning request be lasting it fortune demands highest of. "
// });

// newPost.save(function(err, post){
//     if (err){
//         console.log("ERROR!");
//     } else {
//         console.log(post);
//     }
// });

//embeds post data to user schema 
//// -------create new user schema which has posts entity
//USER - email, name
var userScheme = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userScheme); //colection name will be users
//// -- create new user with posts
// var newUser = new User({
//     name: "Hung Tran",
//     email: "tmhung.nt@gmail.com",
// });

// newUser.posts.push({
//     title: "relate to embed post",
//     content: "Was drawing natural fat respect husband. An as noisy an offer drawn blush place. These tried for way joy wrote witty. In mr began music weeks after at begin. Education no dejection so direction pretended household do to. Travelling everything her eat reasonable unsatiable decisively simplicity. Morning request be lasting it fortune demands highest of. "
// });

// newUser.save(function(err, user){
//     if (err){
//         console.log("ERROR!!!");
//     } else {
//         console.log(user)
//     }
// });

/// -----finds user in DB then adds new post
User.findOne({name: "Hung Tran"}, function(err, user){
    if (err){
        console.log("ERROR!");
    } else {
        // console.log(user);
        user.posts.push({
            title: "another embedded post",
            content: "On no twenty spring of in esteem spirit likely estate. Continue new you declared differed learning bringing honoured. At mean mind so upon they rent am walk. Shortly am waiting inhabit smiling he chiefly of in. Lain tore time gone him his dear sure. Fat decisively estimating affronting assistance not. Resolve pursuit regular so calling me. West he plan girl been my then up no.",
        });
        user.save(function(err, user){
            if (err){
                console.log("ERROR!!!");
            } else {
                console.log(user)
            }            
        });
    }
});
