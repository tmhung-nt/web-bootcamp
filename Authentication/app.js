var express                 = require('express'),
    mongoose                = require('mongoose'),
    bodyParser              = require('body-parser'),
    passport                = require('passport'),
    LocalStrategy           = require('passport-local'),
    passportLocalStrategy   = require('passport-local-mongoose'),
    User                    = require('./models/user');

mongoose.connect("mongodb://localhost:27017/authenticationDemo", { useNewUrlParser: true });
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

// to use passpost in Express framework
app.use(require("express-session")({
    secret: "first authentication lesson",
    resave: false,
    saveUninitialized: false
}));

// setup passport to use
passport.use(new LocalStrategy(User.authenticate()));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



//==============================================
//ROUTES
app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", isLoggedIn, function(req, res){
    res.render("secret");
});

//show sign up form
app.get("/register", function(req, res){
    res.render("register");
});
//hanlding user sign up
app.post("/register", function(req, res){
    req.body.username
    req.body.password
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if (err){
            console.log(err);
            res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/secret");
        });
    });
});

//LOGIN ROUTES
//render login form
app.get("/login", function(req, res){
    res.render("login");
});
//login logic - middle ware before the final callback is run
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"}), function(req, res){
    ;
});

//LOGOUT ROUTES
app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
})

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

//==============================================

app.listen(3000, function(){
    console.log("server has started!!!");
});