var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require('mongoose'),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment"),
    seedDB      = require("./seeds");

mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
console.log(__dirname); //the whole absolute path

seedDB(); //calling seedDB function to remove all existing campgrounds and comments

// below won't be used after Mongoose DB is introduced
// var campgrounds = [
//     {name: "Salmon Creek", image: "https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg"},
//     {name: "Granite Hill", image: "http://tipsinahmoundscampground.com/wp-content/uploads/2017/07/IMG_6559-copy.jpg"},
//     {name: "Leelanau Pines", image: "http://www.leelanaupinescampresort.com/images/pic_11.jpg"},
//     {name: "Kirk Creek Campground", image: "https://campone.com/wp-content/uploads/2017/12/Kirk-Creek-Campground-Number-8.jpg"},
//     {name: "Sunrise Campground", image: "https://www.tourismnewbrunswick.ca/-/media/Images/TNB/Website/Products/S/SunriseCampground/Sunrise%20Campground%20Arial%20View.jpeg"},
// ];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    // get all the campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if (err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        }
    });

    // res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.campgroundName;
    var image = req.body.campgroundImage;
    var description = req.body.description;
    var newCampground = {name: name, image: image, description: description};
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

app.get("/campgrounds/new", function(req, res){
    res.render("campgrounds/new");
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    // find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if (err){
            console.log("query error:")
            console.log(err);
        } else {
            // console.log(foundCampground);
            // render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
    // res.send("This will be the show page one day!"); 
});

// ================================================
// Comment Routes, nested under campground routes
// ================================================

// COMMNET - form to add new comment for a campground
app.get("/campgrounds/:id/comments/new", function(req, res){
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
app.post("/campgrounds/:id/comments", function(req, res){
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
                    foundCampground.comments.push(comment);
                    foundCampground.save();
                    console.log("a comment is added");
                    res.redirect("/campgrounds/" + foundCampground._id);
                }
            });
        }
    });
});


app.listen(3000, function(){
    console.log("YelpCamp server has started!");
})