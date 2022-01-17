const fs = require("fs");
const express = require('express')
const app = express()


// app.get('/', function(req, resp){
//    resp.send('Hello world')
// })

let database = JSON.parse(fs.readFileSync("database.json"));

app.use(express.json());
app.use(express.static('client'));

app.get('/blog1', function (req, resp){
    resp.json(database["Blogs"]["Blog1"]);
});









app.listen(8090)



