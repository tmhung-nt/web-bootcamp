var express = require('express');
var router  = express.Router({mergeParams: true});
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middleware = require("../middlewares");// require("../middlewares/index");

// ================================================
// Comment Routes, nested under campground routes
// ================================================

// COMMNET - form to add new comment for a campground
router.get("/new", middleware.isLoggedIn, function(req, res){
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
router.post("/", middleware.isLoggedIn, function(req, res){
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
router.get("/:comment_id/edit", middleware.checkCommentOwnership, function(req, res){
    Comment.findById(req.params.comment_id, function(err, foundComment){
        if (err){
            console.log(err);
            res.redirect("back");
        } else {
            res.render("comments/edit", {comment: foundComment, campgroundId: req.params.id});
        }
    })
});

// edit a comment
router.put("/:comment_id", middleware.checkCommentOwnership, function(req, res){
    // console.log(req.body);
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, foundComment){
        if (err){
            console.log(err);
            res.redirect("back");
        } else {
            var campgroundId = req.params.id;
            res.redirect("/campgrounds/" + campgroundId);
        }
    });
});

// delete a comment
router.delete("/:comment_id", middleware.checkCommentOwnership, function(req, res){
    Comment.findByIdAndRemove(req.params.comment_id, function(err, foundComment){
        if (err){
            console.log(err);
            res.redirect("back");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

module.exports = router;