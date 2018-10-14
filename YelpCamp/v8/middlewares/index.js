var Campground = require("../models/campground");
var Comment = require("../models/comment");

// all the middleware goes here
var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("back");
};

middlewareObj.checkCampgroundOwnership = function(req, res, next){
    if (req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
            if (err){
                res.redirect("back");
            } else {
                // foundCampground.author.id is an object, not string --> can't compare by using "==" or "==="
                if (foundCampground.author.id.equals(req.user._id)){
                    // res.render("campgrouds/edit", {campground: foundCampground});
                    next();
                } else {
                    res.redirect("back");
                }
            }
        });
    } else {
        res.redirect("back");
    }
};

middlewareObj.checkCommentOwnership = function(req, res, next){
    if (req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if (foundComment.author.id.equals(req.user._id)){
                next();
            } else {
                console.log("You don't have permission to edit this comment!");
                res.redirect("back");
            }
        });
    } else {
        redirect("back");
    }
};


module.exports = middlewareObj;