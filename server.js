const fs = require("fs");
const express = require('express')
const app = express()


// app.get('/', function(req, resp){
//    resp.send('Hello world')
// })

let database = JSON.parse(fs.readFileSync("./database.json"));

app.use(express.json());
app.use(express.static('client'));
app.use(express.urlencoded());

app.get('/blogs/:blogNumber', function (req, resp){
    n = req.params.blogNumber
    blogID = "Blog" + n
    resp.json(database["Blogs"][blogID]);
});

app.get('/authors/:authorNumber', function (req, resp){
    n = req.params.authorNumber
    authorID = "Author" + n
    resp.json(database["Authors"][authorID]);
});

app.post('/comments/new', function (req, resp){
    form = req.body
    n = form["Blog"]
    blogID = "Blog" + n
    delete form["Blog"];

    database.Blogs[blogID].Comments.push(form)

    fs.writeFile("./database.json", JSON.stringify(database, null, 2), err => {
        if (err) console.log("Error writing file:", err);
    });

    resp.send(database.Blogs[blogID].Comments)
});




app.listen(8090)



