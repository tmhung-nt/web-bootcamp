var express                 = require("express"),
    bodyParser              = require("body-parser"),
    methodOverride          = require("method-override"),
    mongoose                = require('mongoose'),
    passport                = require('passport'),
    LocalStrategy           = require('passport-local'),
    passportLocalStrategy   = require('passport-local-mongoose'),    
    Campground              = require("./models/campground"),
    Comment                 = require("./models/comment"),
    seedDB                  = require("./seeds"),
    User                    = require("./models/user");

var commentRoutes           = require("./routes/comments"),
    campgroundRoutes        = require("./routes/campgrounds"),
    authRoutes              = require("./routes/index");

mongoose.connect("mongodb://localhost/yelp_camp");
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
console.log(__dirname); //the whole absolute path
app.use(methodOverride("_method"));

// PASSPORT CONFIGURATION
app.use(require('express-session')({
    secret: "YelpCamp Authentication",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// inside app.use() in a middleware which will be run for every single routes/requests
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

app.use("/", authRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments" ,commentRoutes);

// seedDB(); //calling seedDB function to remove all existing campgrounds and comments



app.listen(3000, function(){
    console.log("YelpCamp server has started!");
})