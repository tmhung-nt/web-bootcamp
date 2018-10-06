var express                 = require('express'),
    mongoose                = require('mongoose'),
    bodyParser              = require('body-parser'),
    passport                = require('passport'),
    LocalStrategy           = require('passport-local'),
    passportLocalStrategy   = require('passport-local-mongoose'),
    app                     = express(),
    User                    = require('./models/user');

mongoose.connect("mongodb://locahost/authentication-demo");

app.set('view engine', 'ejs');
// to use passpost in Express framework
app.use(require("express-session")({
    secret: "wataruS",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ==============RestFul ROUTEs
app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", function(req, res){
    res.render("secret");
});

app.listen(3000, function(){
    console.log("server has started!!!");
});