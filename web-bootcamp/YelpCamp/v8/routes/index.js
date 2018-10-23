var express = require('express');
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");

router.get("/", function(req, res){
    res.render("landing");
});

// ===========================
// AUTH ROUTES 
// ===========================

// Register routes
router.get("/register", function(req, res){
    res.render("register");
});

// handle sign up logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if (err){
            console.log("#################register error##################\n\n\n");
            console.log(err);
            req.flash("error", err.message)
            // return res.render("register");
            res.redirect("back");
        }
        passport.authenticate("local")(req, res, function(){
            // console.log("******************************authenticate issue\n\n\n\n")
            req.flash("success", "Register successfully!")
            res.redirect("/campgrounds");
        })
    });   
});
// Login routes
router.get("/login", function(req, res){
    res.render("login");
});

//handle login logic
// router.post("/login", middleware, callback)
router.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"}), function(req, res){});
 
// Logout routes
router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "Logged you out!!!")
    res.redirect("/campgrounds");
});

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("back");
};

module.exports = router;