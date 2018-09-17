var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");  //use db_name

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("CAt", catSchema);  // model name will be added a "s" at the end by mongoose

// adding a new cat to the DB
// var george = new Cat({
//     Name: "George",
//     age: 11,
//     temperament: "Grounchy"
// });

// george.save(function(err, catReturnObj){
//     if(err){
//         console.log("Something went WRONG!");
//         console.log(err);
//     } else {
//         console.log("We just saved a cat to the DB:")
//         console.log(catReturnObj);
//     }
// });

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, newCat){
    if (err){
        console.log("Something went WRONG!");
        console.log(err);
    } else {
        console.log("###############################");
        console.log("New Cats")
        console.log(newCat);
    }
});
// retrieve all cats from the DB and console.log each one
Cat.find({}, function(err, cats){
    if (err){
        console.log("Something went WRONG!");
        console.log(err);
    } else {
        console.log("###############################");
        console.log("All the cats:")
        console.log(cats);
    }
})