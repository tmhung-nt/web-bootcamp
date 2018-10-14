var express = require('express');
var router  = express.Router({mergeParams: true});
var Campground = require("../models/campground");
var Comment = require("../models/comment");

// ================================================
// Comment Routes, nested under campground routes
// ================================================

// COMMNET - form to add new comment for a campground
router.get("/new", isLoggedIn, function(req, res){
    // find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if (err){
            console.log("query error:")
            console.log(err);
        } else {
            // console.log(foundCampground);
            // render newComment template 
            res.render("comments/new", {campground: foundCampground});
        }
    });
    // res.send("This will be the show page one day!"); 
});

// Add new comment
router.post("/", isLoggedIn, function(req, res){
    //create new comment, link to according campground then save to db
    // find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if (err){
            console.log("query error:")
            console.log(err);
        } else {
            //create a comment
            Comment.create(req.body.comment, function(err, comment){
                if (err){
                    console.log("failed to create new comment");
                    console.log(err);
                } else {
                    // add user and id to comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    // save the comment
                    comment.save();

                    // save comment to associated campground
                    foundCampground.comments.push(comment);
                    foundCampground.save();
                    console.log("a comment is added");
                    res.redirect("/campgrounds/" + foundCampground._id);
                }
            });
        }
    });
});

// show form to edit a comment
router.get("/:id/edit", isLoggedIn, function(req, res){
        Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        foundCampground.find({"comments": req.params.id}, function(err, foundComment){});
        console.log(foundComment);
        res.render("comments/edit", {campground: foundCampground, comment: foundComment});
    })
});

// edit a comment
router.put("/:id", isLoggedIn, function(req, res){
    Comment.findById(req.params.id, function(err, foundComment){
        if (req.user.username === foundComment.author.username){
            // udpate comment's text
            foundComment.text = req.body.comment[text];
            foundComment.save();
        } else {
            console.log("You don't have permission to edit this comment");
        }
        res.redirect("/campgrounds/" + req.params.id);
    });
});

// delete a comment
router.delete("/:id", isLoggedIn, function(req, res){
    Comment.findById(req.params.id, function(err, foundComment){
        if (req.user.username === foundComment.author.username){
            // delete the comment
            foundComment.remove();
        } else {
            console.log("You don't have permission to delete this comment");
        }
        res.redirect("/campgrounds/" + req.params.id);
    });
});

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};

module.exports = router;