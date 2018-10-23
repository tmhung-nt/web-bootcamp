var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");

var data = [
    {"name" : "Tree, night, dark and stars", "image" : "https://images.unsplash.com/photo-1515408320194-59643816c5b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fcbebfe204ad7e04d558d7e0cbc0d2eb&auto=format&fit=crop&w=1050&q=80", "description" : "Tree, night, dark and stars HD photo by Caleb Loeken (@caleb_loeken) on Unsplash.html"},
    {"name" : "camping tent on top of mountain", "image" : "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c85daa025ee04c951b6ac12fe3ba031a&auto=format&fit=crop&w=1050&q=80", "description" : "Camping in the mountains photo by Christopher Jolly (@chris_jolly) on Unsplash.html"},
    {"name" : "Edge of the world", "image" : "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa6e65fcad07b9a68420c430034f84f2&auto=format&fit=crop&w=1050&q=80", "description" : "Edge of the world photo by Tommy Lisbin (@tlisbin) on Unsplash.html"}
]

function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
        if (err){
            console.log(err);
        } else {
            // console.log("removed Camground");
            Comment.remove({}, function(err){
                if (err){
                    console.log(err);
                } else {
                    // console.log("removed comments");
                    // add a few campgrounds
                    data.forEach(function(seed){
                        Campground.create(seed, function(err, campground){
                            if (err){
                                console.log(err);
                            } else {
                                // console.log("Added a campground");
                                //create a comment
                                Comment.create({
                                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                                    author: "seedDB"
                                }, function(err, comment){
                                    if (err){
                                        console.log(err);
                                    } else {
                                        campground.comments.push(comment);
                                        campground.save();
                                        // console.log("a comment is added")
                                    }
                                });
                            }
                        })
                    });
                    console.log("finish seeding DB");
                }
            });
        }
    });
}

module.exports = seedDB;