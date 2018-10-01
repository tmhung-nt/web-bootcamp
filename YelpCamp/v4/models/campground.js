var mongoose = require("mongoose");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"  //model name
        }
    ]
});

var Campground = mongoose.model("Campground", campgroundSchema);
module.exports = Campground;

// Campground.create({
//     name: "Salmon Creek", 
//     image: "https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg",
//     description: "Same an quit most an. Admitting an mr disposing sportsmen. Tried on cause no spoil arise plate."
// }, function(err, campground){
//     if (err){
//         console.log(err);
//     } else {
//         console.log("NEWLY CREATED CAMPGROUND:");
//         console.log(campground);
//     }
// });

// var Campground = mongoose.model("Campground", campgroundSchema);
// Campground.create({
//     name: "Granite Hill", 
//     image: "http://tipsinahmoundscampground.com/wp-content/uploads/2017/07/IMG_6559-copy.jpg",
//     description: "Woody equal ask saw sir weeks aware decay. Entrance prospect removing we packages strictly is no smallest he."
// }, function(err, campground){
//     if (err){
//         console.log(err);
//     } else {
//         console.log("NEWLY CREATED CAMPGROUND:");
//         console.log(campground);
//     }
// });