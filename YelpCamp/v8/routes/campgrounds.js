var express = require('express');
var router  = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middlewares");// require("../middlewares/index");

router.get("/", function(req, res){
    // get all the campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if (err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds, currentUser: req.user});
        }
    });
});

router.post("/", middleware.isLoggedIn, function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.campgroundName;
    var image = req.body.campgroundImage;
    var description = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {
        name: name, 
        image: image, 
        description: description,
        author: author
    };

    //create new campground and save to DB
    Campground.create(newCampground, function(err, campground){
        if (err){
            console.log(err);
        } else {
            console.log("NEWLY CREATED CAMPGROUND:");
            //redirect back to campgrounds page
            res.redirect("campgrounds");
        }
    });
});

router.get("/new", middleware.isLoggedIn, function(req, res){
    res.render("campgrounds/new");
});

// SHOW - shows more info about one campground
router.get("/:id", function(req, res){
    // find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if (err){
            console.log("query error:")
            console.log(err);
        } else {
            // render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground, currentUser: req.user});
        } 
    });
});

// ======================Edit Routes======================
// get edit form
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
    // find the post with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if (err){
            console.log(err);
            res.redirect("/campgrounds"); //go back to previous page 
        } else {
            // render edit template with that blog
            res.render("campgrounds/edit", {campground: foundCampground});
        }
    });
});

// EDIT/UPDATE - modify info of a campground
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if (err){
            console.log("error while updating");
            res.redirect("/campgrounds");
        } else {
            console.log("campground is udpated");
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

// ==========Delete route
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err, deletedCampground){
        if (err){
            console.log("Campground was not deleted!");
        } else {
            console.log("Campground is deleted!");
        }
        res.redirect("/campgrounds");
    });
});

module.exports = router;