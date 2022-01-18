const fs = require("fs");
const express = require('express')
const app = express()


// app.get('/', function(req, resp){
//    resp.send('Hello world')
// })

let database = JSON.parse(fs.readFileSync("database.json"));

app.use(express.json());
app.use(express.static('client'));

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









app.listen(8090)



