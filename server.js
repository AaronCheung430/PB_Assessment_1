const fs = require("fs");
const express = require('express')
const app = express()


// app.get('/', function(req, resp){
//    resp.send('Hello world')
// })

let database = JSON.parse(fs.readFileSync("database.json"));

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
    // n = req.params.authorNumber
    // authorID = "Author" + n
    // resp.json(database["Authors"][authorID]);
    console.log(req.body)
    resp.send(req.body)
});







app.listen(8090)



