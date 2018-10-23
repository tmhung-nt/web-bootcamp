var express                 = require("express"),
    bodyParser              = require("body-parser"),
    methodOverride          = require("method-override"),
    flash                   = require("connect-flash"),
    mongoose                = require('mongoose'),
    passport                = require('passport'),
    LocalStrategy           = require('passport-local'),
    seedDB                  = require("./seeds"),
    User                    = require("./models/user");

var commentRoutes           = require("./routes/comments"),
    campgroundRoutes        = require("./routes/campgrounds"),
    authRoutes              = require("./routes/index");

// define variables for starting the app
var dbUrl       = process.env.DBurl || "mongodb://localhost/yelp_camp";
var serverPort  = process.env.PORT  || "3000" ;
var serverIP    = process.env.IP    || "localhost"; 


    // mongoose.connect("mongodb://localhost/yelp_camp");
// mongoose.connect("mongodb://admin:12345678a@ds037508.mlab.com:37508/yelpcamp-v8");
mongoose.connect(dbUrl);
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
console.log(__dirname); //the whole absolute path
app.use(methodOverride("_method"));
app.use(flash());

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
    res.locals.currentUser  = req.user;
    res.locals.errorMsg      = req.flash("error");
    res.locals.successMsg      = req.flash("success");
    next();
});

app.use("/", authRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments" ,commentRoutes);

// seedDB(); //calling seedDB function to remove all existing campgrounds and comments



// app.listen(3000, function(){
//     console.log("YelpCamp server has started!");
// })
app.listen(serverPort, function(){
    console.log("The YelpCamp Server Has Startedat IP=" + serverIP + ":" + serverPort);
 });