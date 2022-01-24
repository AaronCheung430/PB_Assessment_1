const fs = require("fs");
const express = require('express')
const app = express()

const database = JSON.parse(fs.readFileSync("./database.json"));

app.use(express.json());
app.use(express.static('client'));
app.use(express.urlencoded({ extended: true }));

app.get('/blogs/:blogNumber', function (req, resp){
    let n = req.params.blogNumber
    let blogID = "Blog" + n
    resp.json(database["Blogs"][blogID]);
});

app.get('/blog', function (req, resp){
    let searchTerm = req.query.search_term;
    let searchBlogs = [];
    if (searchTerm == '') {
        resp.send(searchBlogs)
        return
    }
    for (let blog of Object.entries(database.Blogs)) {
        if (blog[1].Description.toLowerCase().includes(searchTerm.toLowerCase())) {
            searchBlogs.push(blog);
        }
    };
    resp.send(searchBlogs)
});

app.get('/authors/:authorNumber', function (req, resp){
    let n = req.params.authorNumber
    let authorID = "Author" + n
    resp.json(database["Authors"][authorID]);
});

app.post('/comments/new', function (req, resp){
    let form = req.body
    console.log(JSON.stringify(form))
    // form.Blog
    // if form.Blog
    let n = form["Blog"]
    let blogID = "Blog" + n
    console.log(blogID)
    delete form["Blog"];

    database.Blogs[blogID].Comments.push(form)

    fs.writeFile("./database.json", JSON.stringify(database, null, 2), err => {
        if (err) console.log("Error writing file:", err);
    });

    resp.send(database.Blogs[blogID])
});

module.exports = app;
