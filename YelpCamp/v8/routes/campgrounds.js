var express = require('express');
var router  = express.Router();
var Campground = require("../models/campground");

router.get("/", function(req, res){
    // console.log("req.user: " + req.user);
    // get all the campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if (err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds, currentUser: req.user});
        }
    });

    // res.render("campgrounds", {campgrounds: campgrounds});
});

router.post("/", isLoggedIn, function(req, res){
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
    // campgrounds.push(newCampground);

    //create new campground and save to DB
    Campground.create(newCampground, function(err, campground){
        if (err){
            console.log(err);
        } else {
            console.log("NEWLY CREATED CAMPGROUND:");
            // console.log(campground);
            //redirect back to campgrounds page
            res.redirect("campgrounds");
        }
    });
});

router.get("/new", isLoggedIn, function(req, res){
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
            // console.log(foundCampground);
            // render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground, currentUser: req.user});
        }
    });
    // res.send("This will be the show page one day!"); 
});

// ======================Edit Routes======================
// get edit form
router.get("/:id/edit", isLoggedIn, function(req, res){
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
router.put("/:id", isLoggedIn, function(req, res){
    // find the campground with provided ID
    // Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
    //     if (err){
    //         console.log("query error:");
    //         console.log(err);
    //         res.redirect("/campgrouds");
    //     } else {
    //         if (req.user.username === foundCampground.author.username){
    //             // edit campground attributes with receiving value
    //             foundCampground.name        = req.body.campgroundName;
    //             foundCampground.image       = req.body.campgroundImage;
    //             foundCampground.description = req.body.description;    
    //             //save updated campground
    //             foundCampground.save();
    //             res.redirect("/campgrounds/" + req.params.id);
    //         } else {
    //             console.log("You don't have permission to modify this campgroud!");
    //             res.redirect("/campgrounds/" + req.params.id);
    //         }
    //     }
    // });
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if (err){
            console.log("error while updating");
            res.redirect("/campgrouds");
        } else {
            console.log("campground is udpated");
            res.redirect("/campgrouds" + req.params.id);
        }
    });
});

// ==========Delete route
router.delete("/:id", isLoggedIn, function(req, res){
    //delete campground
    // Campground.findById(req.params.id, function(err, foundCampground){
    //     if (err){
    //         console.log("Query error: " + err);
    //     } else {
    //         if (req.user.username === foundCampground.author.username){
    //             foundCampground.remove();
    //         } else {
    //             console.log("Just the campground's author can delete this!");
    //         }
    //         res.redirect("/campgrounds");
    //     }
    // });
    Campground.findByIdAndRemove(req.params.id, function(err, deletedCampground){
        if (err){
            console.log("Campground is deleted!");
        } else {
            console.log("Campground is deleted!");
        }
        res.redirect("/campgrounds");
    });
});

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};

module.exports = router;