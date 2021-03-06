var express         = require('express'),
    bpdyParser      = require('body-parser'),
    mongoose        = require('mongoose'),
    methodOverride  = require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    app             = express();

//set up express
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bpdyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

//mongoose schema/model config
mongoose.connect("mongodb://localhost/restful-blog-app");

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title: "Test Blog",
//     image: "https://images.unsplash.com/photo-1537724903888-33a8c4aadb8d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4da67e53d657cb7b0a947963c416f100&auto=format&fit=crop&w=612&q=80",
//     body: "HELLO THIS IS A BLOG POST"
// });

//RESTful routes
app.get("/", function(req, res){
    res.redirect("/blogs"); //go to index page as homepage
});

app.get("/blogs", function(req, res){
    Blog.find({}, function(err, allAvailableBlogs){
        if (err){
            console.log("ERROR!");
        } else {
            res.render("index", {blogs: allAvailableBlogs});
        }
    });
});

//new route
app.get("/blogs/new", function(req, res){
    res.render("new-post");
});

// create route
app.post("/blogs", function(req, res){
    //create blog
    console.log(req.body.blog.body);
    console.log("---------------------------------");
    req.body.blog.body = req.sanitize(req.body.blog.body);
    console.log(req.body.blog.body);
    Blog.create(req.body.blog, function(err, newBlog){
        if (err){
            console.log("ERROR!!!");
        } else {
            console.log("----------New Post-----------");
            console.log(newBlog);
            res.redirect("/blogs");
        }
    });
});

//show route
app.get("/blogs/:id", function(req, res){
    // res.render("show");
    // find the post with provided ID
    Blog.findById(req.params.id, function(err, foundPost){
        if (err){
            console.log(err);
            res.redirect("/blogs"); //go back to previous page 
        } else {
            // render show template with that blog
            res.render("show", {blog: foundPost});
        }
    });
});

//edit route - to get edit form
app.get("/blogs/:id/edit", function(req, res){
    // find the post with provided ID
    Blog.findById(req.params.id, function(err, foundPost){
        if (err){
            console.log(err);
            res.redirect("/blogs"); //go back to previous page 
        } else {
            // render edit template with that blog
            res.render("edit", {blog: foundPost});
        }
    });
});

//update route - to update the record in DB
app.put("/blogs/:id", function(req, res){
    //update blog
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if (err){
            console.log("ERROR!!!");
        } else {
            console.log("----------Editted Post-----------");
            console.log(updatedBlog);
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

// delete route
app.delete("/blogs/:id", function(req, res){
    //delete post
    Blog.findByIdAndRemove(req.params.id, req.body.blog, function(err, updatedBlog){
        if (err){
            console.log("ERROR!!!");
            res.redirect("/blogs");
        } else {
            console.log("----------Deleting Post-----------");
            console.log(updatedBlog);
            res.redirect("/blogs");
        }
    });
});

app.listen(3000, function(){
	console.log("Server is started!");
});